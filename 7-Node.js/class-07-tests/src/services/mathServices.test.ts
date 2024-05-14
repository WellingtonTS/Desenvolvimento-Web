import { describe, expect, it, test } from "vitest";
import { subNumbers, sumNumbers } from "./mathServices";

describe("test math functions", () => {
  test("should make a sum 2 + 3 = 5", () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });

  it("should make a sub 5 - 2 = 3", () => {
    expect(subNumbers(5, 2)).toEqual(3);
  });
});
