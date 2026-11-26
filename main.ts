// The Robot Vacuum's Funniest Excuse — make.fun one-line entry.
// A robot vacuum explains why one patch of floor stayed dirty:
// the cat sits there, and the two of them have an understanding.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I missed that spot because it is where the cat sits, and we have an understanding.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Self-check against the competition gate before writing: the entry must be
// 1–120 characters of non-whitespace UTF-8 text, or the sealed scorer
// would mark it invalid. Fail loudly here rather than ship a bad entry.
function assertGateValid(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`entry length ${chars} is outside the 1-120 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

function main(): void {
  assertGateValid(EXCUSE);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
