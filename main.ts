// One-line office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes" bounty.
// The program writes a single original joke (110 characters, one line) to /output/entry.txt.
// The judge compares entries head to head, so the joke is built for its brief: a genuine
// office joke, a surprise turn at the end, a wince of recognition, tight wording, and a
// fresh take (no Monday-morning or photocopier line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my Slack status to 'in a meeting' to eat lunch in peace, and now I'm in a meeting about my Slack status.";

// Entry gate: the joke must be exactly one line of 1-200 characters.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}.`);
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
