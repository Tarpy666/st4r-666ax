# ST4R-666AX

Clean-room real-time-strategy — RTS conventions (gather, build, command, rush)

Part of the 666AX game fleet: one distinctive repo per game, original code,
original assets, leetspeak-branded names. We compete on gameplay.

## Quickstart

```bash
npm install
npm run typecheck   # strict TS, zero errors
npm test            # deterministic, seeded
```

## Structure

- `src/archetype.ts` — deterministic core logic (ResourceTick, BuildQueue)
- `src/index.ts` — public API (`SPEC`, `MODULES`)
- `src/rng.ts` — seeded PRNG (mulberry32)
- `docs/BUILD_PLAN.md` — next-agent build plan and competitive logic
