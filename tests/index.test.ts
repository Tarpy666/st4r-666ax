import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { ResourceTick, BuildQueue } from "../src/archetype";

describe("ST4R-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(2);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const rt = new ResourceTick();
rt.tick(3);
expect(rt.resources()).toEqual({ food: 53, wood: 53 });
const bq = new BuildQueue();
bq.enqueue("barracks");
expect(bq.buildFirst(10, 100)).toBe("barracks");
expect(bq.buildFirst(10, 100)).toBe(null);
  });
});
