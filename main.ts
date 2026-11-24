import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a quiet moment, a real person, a concrete scene.
// The pride is earned inside the line by the slow work of tuning by ear, and it
// arrives with the very last word — the cat never opening an eye.
const LINE =
  "Three evenings, by ear, string by string, she tuned the old piano true; the cat on its lid slept through her first perfect chord, and she bowed to it anyway.";

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
