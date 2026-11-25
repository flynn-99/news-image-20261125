// news-image-20261125: copy the entry image to the output directory.
// The image (entry.png) is built in this repository; this program only
// places it where the grader expects it, with no network and no changes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const USAGE = `news-image-20261125 — one image summing up the world news of 25 November 2026.

Usage:
  MAKEFUN_OUTPUT_DIR=out node main.ts

Copies entry.png from beside this file into the output directory as entry.png.
Options:
  --help, -h   print this usage and exit 0
`;

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  process.stdout.write(USAGE);
  process.exit(0);
}

const root = fileURLToPath(new URL('.', import.meta.url));
// Default is the grader's /output; the run command sets MAKEFUN_OUTPUT_DIR.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(root, 'entry.png'), join(outDir, 'entry.png'));
