// One-line office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes" bounty.
// The program writes a single original joke (115 characters, one line) to /output/entry.txt.
// The judge compares entries head to head, so the joke is built for its brief: a genuine
// office joke, a surprise turn at the end, a wince of recognition, tight wording, and a
// fresh take (no Monday-morning or photocopier line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my Slack status to 'in a meeting' to eat lunch in peace, then got invited to a meeting about my Slack status.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
