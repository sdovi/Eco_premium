import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mapPath = process.argv[2] || join(__dirname, '..', 'images-map.json');
const outDir = join(__dirname, '..', 'public', 'images');

const map = JSON.parse(readFileSync(mapPath, 'utf-8'));

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const entries = Object.entries(map);
let ok = 0;
let err = 0;

for (const [filename, url] of entries) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const buf = await res.arrayBuffer();
    const path = join(outDir, filename);
    writeFileSync(path, Buffer.from(buf));
    console.log(`OK: ${filename}`);
    ok++;
  } catch (e) {
    console.error(`FAIL: ${filename} - ${e.message}`);
    err++;
  }
}

console.log(`\nDone: ${ok} ok, ${err} failed`);
