// Entry for make.fun bounty "Warning Label for Humans: One Line, Big Laugh".
// The program writes one single-line safety warning label for human beings
// to <output>/entry.txt. The label is exactly 100 characters: it reads like
// a real printed warning, the joke is a recognition of how humans actually
// behave (dead phone, total confidence, lost charger), and the laugh lands
// in the last few words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: This human runs on 3% battery, 97% confidence, and a charger it has not seen since Tuesday.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate refuses anything that is not 1-160 characters of single-line
// text, so check the label before writing it instead of shipping a bad file.
if (LABEL.length < 1 || LABEL.length > 160 || LABEL.includes("\n")) {
  throw new Error(`label is ${LABEL.length} characters or not a single line`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LABEL, "utf8");
console.log(`Wrote entry.txt (${LABEL.length} characters) to ${outputDir}`);
