import { Dice } from "../src";
import { MockRandomProvider } from "./helpers/mock-random-provider";

describe("Dice", () => {
    describe("constructor", () => {
        it("should not throw", function () {
            expect(() => {
                const dice = new Dice();
            }).not.toThrow();
        });
    });
    describe("roll", () => {
        it("returns a number from random", function () {
            const dice = new Dice();
            const result = dice.roll("1d20").total;
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(20);
        });

        it("succeeds on a complex expression", function () {
            const dice = new Dice();
            const result = dice.roll("floor((2d4)d20 / 3) + 6");
            JSON.stringify(result);
        });
    });
});
