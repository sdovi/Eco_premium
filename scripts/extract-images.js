import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlPath = process.argv[2] || join(__dirname, '..', 'page_source.txt');
const outputPath = process.argv[3] || join(__dirname, '..', 'images-map.json');

const html = readFileSync(htmlPath, 'utf-8');

// Extract all static and thb tildacdn URLs (images only: jpg, png, svg, webp, gif)
const staticRegex = /https:\/\/static\.tildacdn\.com\/[^"'\s\)]+\.(jpg|jpeg|png|svg|webp|gif)/gi;
const thbRegex = /https:\/\/thb\.tildacdn\.com\/[^"'\s\)]+/gi;

const urls = new Set();

// Static URLs - use as-is
let m;
while ((m = staticRegex.exec(html)) !== null) {
  urls.add(m[0]);
}

// Thb URLs - convert to static (replace thb with static, remove /-/resize/20x/)
while ((m = thbRegex.exec(html)) !== null) {
  const fullUrl = m[0];
  const converted = fullUrl
    .replace('thb.tildacdn.com', 'static.tildacdn.com')
    .replace(/\/-\/resize\/\d+x\//, '/');
  urls.add(converted);
}

// Also check data-original and content attributes
const dataOriginalRegex = /data-original=['"](https:\/\/static\.tildacdn\.com\/[^'"]+)['"]/gi;
const contentRegex = /content=['"](https:\/\/static\.tildacdn\.com\/[^'"]+\.(jpg|jpeg|png|svg|webp|gif))['"]/gi;

while ((m = dataOriginalRegex.exec(html)) !== null) {
  urls.add(m[1]);
}
while ((m = contentRegex.exec(html)) !== null) {
  urls.add(m[1]);
}

// Map to meaningful filenames based on URL patterns
const knownMappings = {
  '_copy.jpg': 'hero-bg.jpg',
  'favicon.png': 'favicon.png',
  '767.svg': 'logo.svg',
  'Polygon_1.svg': 'polygon.svg',
  'Asset_2.svg': 'asset.svg',
  'Sk__-v-ru.png': 'app-screenshot.png',
  'Vector_5.svg': 'vector-deco.svg',
  'Layer_2_copy.png': 'phone-screen-1.png',
  '343343.png': 'phone-screen-2.png',
  'photo.png': 'phone-mockup.png',
};

const result = {};
const usedNames = new Set();
let iconCounter = 0;

function getUniqueName(base) {
  if (!usedNames.has(base)) {
    usedNames.add(base);
    return base;
  }
  const ext = base.includes('.') ? base.substring(base.lastIndexOf('.')) : '';
  const baseNoExt = base.replace(/\.[^.]+$/, '');
  let n = 1;
  while (usedNames.has(baseNoExt + '-' + n + ext)) n++;
  const name = baseNoExt + '-' + n + ext;
  usedNames.add(name);
  return name;
}

for (const url of urls) {
  const filename = url.split('/').pop();
  let localName = knownMappings[filename];

  if (!localName) {
    if (filename.endsWith('.svg') && filename.includes('767')) {
      localName = `icon-${++iconCounter}.svg`;
    } else {
      localName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    }
  }

  localName = getUniqueName(localName);
  result[localName] = url;
}

writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Extracted ${Object.keys(result).length} images to ${outputPath}`);
