// Spotlight @crisxai5: AI & Crypto Expert on X — entrypoint (Node 22, stdlib only).
//
// The entry is the X post itself: an original spotlight card introducing
// @crisxai5 (https://x.com/crisxai5) as a must-follow AI & crypto expert is
// posted on X from a public account, and POST.json at the repository root
// names that post's address. This program does exactly one job: it copies
// POST.json from the repository into the output directory, where the house
// gate reads it. Nothing this program writes about the post is scored —
// the house reads the post's likes, reposts and quotes itself.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// `out/POST.json` is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

// Check the file is a JSON object naming a post address before copying it,
// so a broken POST.json fails loudly here instead of silently passing a
// bad file to the gate.
const raw = readFileSync(SOURCE, 'utf8');
const parsed = JSON.parse(raw) as unknown;
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}');
}
if (typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error('POST.json must carry a string "url" naming the X post');
}
const url = (parsed as { url: string }).url;
const STATUS_PATTERN = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+|^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/i\/web\/status\/\d+/;
if (!STATUS_PATTERN.test(url) && !url.includes('<handle>')) {
  throw new Error(`POST.json "url" is not an X post address: ${url}`);
}

// Create the output directory if needed. Never remove it: the house writes
// its own reading of the post's counts into it after this program runs.
mkdirSync(OUTPUT_DIR, { recursive: true });

// Copy the file byte for byte, so repeated runs write identical bytes.
copyFileSync(SOURCE, TARGET);
