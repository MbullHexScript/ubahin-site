
import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(
  new URL("../", import.meta.url)
);

const output = path.join(root, "dist-site");
const source = path.join(root, "src");

async function readOutput(filename) {
  return readFile(path.join(output, filename), "utf8");
}

test("React production build memiliki halaman utama", async () => {
  const html = await readOutput("index.html");

  assert.match(html, /id=["']root["']/);
  assert.match(html, /<script[^>]+type=["']module["']/);
  assert.match(html, /assets\/main-[^"']+\.js/);
  assert.doesNotMatch(html, /src=["']\/main\.tsx["']/);
});

test("Halaman 404 tersedia", async () => {
  const html = await readOutput("404.html");

  assert.match(html, /Halaman tidak ditemukan/);
  assert.match(html, /Kembali ke Ubahin/);
});

test("Referensi aset lokal valid", async () => {
  for (const filename of ["index.html", "404.html"]) {
    const html = await readOutput(filename);

    for (const [, url] of html.matchAll(
      /\b(?:href|src)="([^"]+)"/g
    )) {
      if (/^(https?:|mailto:|data:|#)/i.test(url)) {
        continue;
      }

      const pathname = url.split(/[?#]/)[0];

      const asset = pathname === "/"
        ? path.join(output, "index.html")
        : path.join(output, pathname.replace(/^\/+/, ""));

      const info = await stat(asset);
      assert.ok(info.isFile(), `Aset tidak ada: ${url}`);
    }
  }
});

test("Lisensi font Geist tersedia", async () => {
  const license = await readOutput(
    "assets/GEIST-OFL.txt"
  );

  assert.ok(license.length > 0);
});

test("Tautan release tetap menggunakan sumber resmi", async () => {
  const download = await readFile(
    path.join(source, "components", "Download.tsx"),
    "utf8"
  );

  assert.match(
    download,
    /github\.com\/MbullHexScript\/ubahin-site\/releases\/download\/v1\.0\.0/
  );

  for (const filename of [
    "Ubahin-1.0.0-Setup-x64.exe",
    "SHA256SUMS.txt",
    "THIRD-PARTY-NOTICES.md",
    "THIRD-PARTY-SOURCES.txt"
  ]) {
    assert.ok(
      download.includes(filename),
      `Referensi tidak ditemukan: ${filename}`
    );
  }
});

test("Build tidak membocorkan file desktop privat", async () => {
  const files = await readdir(output, {
    recursive: true
  });

  const forbidden =
    /\.(exe|zip|tgz|rs|env)$|release-manifest|downloads/i;

  assert.ok(
    !files.some((filename) => forbidden.test(filename)),
    "Terdapat file terlarang dalam production build"
  );
});
