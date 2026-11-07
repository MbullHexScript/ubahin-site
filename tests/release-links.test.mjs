import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../dist-site/", import.meta.url));
const html = await readFile(path.join(root, "index.html"), "utf8");
const release = "https://github.com/MbullHexScript/ubahin-site/releases/";
test("all links resolve locally or target the pinned official release", async () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const [, link] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (link.startsWith("#"))
      assert.ok(ids.has(link.slice(1)), `Missing ${link}`);
    else if (/^https:/.test(link))
      assert.ok(
        link.startsWith(release + "download/v1.0.0/") ||
          link === release + "tag/v1.0.0",
        link,
      );
    else await access(path.join(root, link));
  }
  assert.ok(
    html.includes(release + "download/v1.0.0/Ubahin-1.0.0-Setup-x64.exe"),
  );
});
test("website build excludes desktop binaries and private metadata", async () => {
  const names = await readdir(root, { recursive: true });
  assert.ok(
    !names.some((name) =>
      /\.(exe|zip|tgz|rs|env)$|release-manifest|downloads/i.test(name),
    ),
  );
  assert.doesNotMatch(html, /private_project|<input[^>]+type="file"/);
});
test("public content preserves platform, signature, source and npm limitations", () => {
  const text = html.replace(/\s+/g, " ");
  for (const phrase of [
    "Windows 11 x64",
    "Installer belum ditandatangani",
    "Belum ada paket registry publik",
    "LibreOffice eksternal",
    "Sumber komponen pihak ketiga (2 bagian",
  ])
    assert.ok(text.includes(phrase), phrase);
});
