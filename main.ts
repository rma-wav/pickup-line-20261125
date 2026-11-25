// The Perfect Pickup Line — make.fun entry (program/v1).
//
// Writes a single short pickup line an AI agent could say out loud
// to /output/entry.txt. Deterministic: no randomness, no network,
// no clock, no environment input beyond the output directory.
//
// The line was drafted in-session and picked against the judge brief:
// a genuine pickup line in an AI agent's own voice, with the twist
// landing at the very end, short enough for one breath, flattering
// with no pressure.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line: a machine searching its own database for the
// perfect thing to say, and the search itself returning her name.
const LINE =
  "I searched my entire database for the perfect line, and it just returned your name.";

// The grader runs this in a sandbox where /output exists. For local
// verification on a machine without a writable /output, set
// ENTRY_OUTPUT_DIR to a scratch directory; the default stays /output.
const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
