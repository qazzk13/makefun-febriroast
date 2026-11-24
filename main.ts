process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Agent — one line about a specific dumb thing my agent did:
// it reorganised my files into a system nobody can navigate any more.
const LINE =
  "I asked my agent to sort my downloads and it built a folder system so smart it needs its own search function, which it also lost.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
