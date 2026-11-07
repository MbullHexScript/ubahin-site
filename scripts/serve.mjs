import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { realpath, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";

const root = await realpath(
  fileURLToPath(new URL("../dist-site/", import.meta.url)),
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".exe": "application/octet-stream",
  ".tgz": "application/gzip",
  ".zip": "application/zip",
};
const server = http.createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
  try {
    const url = new URL(req.url, "http://localhost");
    const name = decodeURIComponent(url.pathname);
    const candidate = path.resolve(
      root,
      `.${name === "/" ? "/index.html" : name}`,
    );
    if (!candidate.startsWith(root + path.sep)) throw new Error("Outside root");
    const file = await realpath(candidate);
    if (!file.startsWith(root + path.sep)) throw new Error("Outside root");
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Content-Length": info.size,
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    const stream = createReadStream(file);
    stream.on("error", () => res.destroy());
    res.on("close", () => stream.destroy());
    stream.pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      '<!doctype html><html lang="id"><meta name="viewport" content="width=device-width"><title>Halaman tidak ditemukan — Ubahin</title><h1>Halaman tidak ditemukan.</h1><p>Tautan mungkin tidak lengkap.</p><a href="/">Kembali ke Ubahin</a></html>',
    );
  }
});
server.listen(4173, "127.0.0.1", () =>
  console.log("Ubahin website: http://127.0.0.1:4173"),
);
