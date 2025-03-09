import { describe, expect, it } from "vitest";

import { historyLengthCutter } from "../../src/lib/utils/command";

describe("historyLengthCutter", () => {
	const baseArr = [...Array.from(Array(50).keys()), 0, 1]; // 0 to 49
	const base40ElementsArr = [...Array.from(Array(40).keys())]; // 0 to 39
	it("should return only the last 40 elements when more than 50 items are input", () => {
		const expectedArr = [
			12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
			30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
			48, 49, 0, 1
		];
		const result = historyLengthCutter(baseArr);
		expect(result).toEqual(expectedArr);
	});
	it("should return 40 elements when input is 50", () => {
		const result = historyLengthCutter(baseArr);
		expect(result.length).toBe(40);
	});
	it("should return same elements when input is 40", () => {
		const result = historyLengthCutter(base40ElementsArr);
		expect(result).toEqual(base40ElementsArr);
	});
});
