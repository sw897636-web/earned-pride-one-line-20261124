import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a quiet moment, a real person, a concrete scene.
// The pride is earned inside the line by eleven years of unseen work, and it
// arrives with the very last word — the principal's question.
const LINE =
  "For eleven years he mopped the same school hallway, and tonight the principal stopped, looked at the shine, and asked who kept the floors like that.";

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
