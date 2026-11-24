import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a quiet moment, a real person, a concrete scene.
// The pride is earned inside the line by the slow work of tuning by ear, and it
// arrives with the very last word — the cat never opening an eye.
const LINE =
  "She tuned the old piano by ear, string by string, until middle C held, and the cat asleep on the keys never opened an eye.";

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
