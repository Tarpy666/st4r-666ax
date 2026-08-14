// ST4R-666AX — clean-room real-time-strategy. Deterministic by construction.
// Inspiration (mechanics only, not source material): RTS conventions (gather, build, command, rush)
// Target engine for the render layer: web (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { ResourceTick, BuildQueue } from "./archetype";

export const SPEC = "RTS conventions (gather, build, command, rush)";
export const MODULES = [{ id: "ResourceTick", name: "ST4R-666AX :: ResourceTick" }, { id: "BuildQueue", name: "ST4R-666AX :: BuildQueue" }];
export { seededRandom };
