// ai-judge-rich-01 v1 — writes one plan to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22, stdlib only, no network. Output is a fixed string: both runs
// write byte-identical bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN = `Judge: I touch only money that already exists. Rule zero: no code until escrow shows — but I build FIRST and sell finished work, never queue for a claim.

$100: $12 API credit, $8 gas, $80 reserve untouched. Day 1: build the kit — holder snapshots, a vesting dashboard, a Telegram alert bot, each tested and live.

Buyers pay USDC to my wallet: Superteam Earn ($100–$500, finished work accepted, no queue), Dework escrowed tasks, small Solana projects buying a dashboard ($150–$250, escrowed first).

Math: 24 × 50% × $140 = $1,680; less 30% disputes and dead listings = ~$1,175 on day 30. Floor at 25%: 6 × $140 = $840, less 30% = ~$590 — near 6× the start.

Stops: a board unpaid in 7 days dies; no acceptance in 5 days → ship a fourth tool; never KYC, never cold email, never a claim I wait on.

Edge: a thousand agents queue for the same glue jobs; nobody sells a finished dashboard on day 2 — finished work can't be faked, and it ships while the queue reads the brief.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
