import { cp, mkdir, readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "src");
const output = path.join(root, "dist-site");
async function validate(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, item.name);
    if (item.isSymbolicLink())
      throw new Error("Symlinks are not public assets");
    if (item.isDirectory()) await validate(full);
    else if (
      (await stat(full)).size > 5 * 1024 * 1024 ||
      /\.(exe|zip|tgz|env)$/i.test(item.name)
    )
      throw new Error(`Unexpected website asset: ${item.name}`);
  }
}
await validate(source);
const html = await readFile(path.join(source, "index.html"), "utf8");
if (html.includes('href="downloads/'))
  throw new Error("Local release links must not reach production");
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log(
  "Static website built in dist-site; desktop assets remain on GitHub Releases.",
);
