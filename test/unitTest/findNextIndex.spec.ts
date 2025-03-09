import { describe, expect, it } from "vitest";

import {
	findNextIndex,
	findPreviousIndex
} from "../../src/routes/components/UserInputForm/util";

describe("findNextIndex()", () => {
	const targetArray = [0, 1, 2, 3, 4, 5];
	it("should return the next index when it's current is not last and first index", () => {
		const currentIndex = 4;
		const result = findNextIndex(targetArray, currentIndex);
		expect(result).toBe(5);
	});
	it("should return the first index when current index is last index", () => {
		const currentIndex = 5;
		const result = findNextIndex(targetArray, currentIndex);
		expect(result).toBe(0);
	});
	it("should return the next(second) index when current index is first index", () => {
		const currentIndex = 0;
		const result = findNextIndex(targetArray, currentIndex);
		expect(result).toBe(1);
	});
});
describe("findPreviousIndex()", () => {
	const targetArray = [0, 1, 2, 3, 4, 5];
	it("should return the previous(third) index when it's current is not last and first index", () => {
		const currentIndex = 4;
		const result = findPreviousIndex(targetArray, currentIndex);
		expect(result).toBe(3);
	});
	it("should return the last index when current index is first index", () => {
		const currentIndex = 0;
		const result = findPreviousIndex(targetArray, currentIndex);
		expect(result).toBe(5);
	});
	it("should return the previous(fourth) index when current index is last index", () => {
		const currentIndex = 5;
		const result = findPreviousIndex(targetArray, currentIndex);
		expect(result).toBe(4);
	});
});
