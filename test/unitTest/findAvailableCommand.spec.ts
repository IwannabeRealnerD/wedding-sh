import { describe, expect, it } from "vitest";

import { findAvailableCommand } from "../../src/routes/components/UserInputForm/util";

describe("findAvailableCommand()", () => {
	it('should return "help" when input is "he', () => {
		const result = findAvailableCommand("he");
		expect(result).toEqual(["help"]);
	});
	it('should return "clear", "contact" when input is "c"', () => {
		const result = findAvailableCommand("c");
		expect(result).toEqual(["clear", "contact"]);
	});
	it('should return "pwd" when input is "p" - in order to find function that starts with "p", not has "p" in it', () => {
		const result = findAvailableCommand("p");
		expect(result).toEqual(["pwd"]);
	});
	it("should return empty array when input is not existing command", () => {
		const result = findAvailableCommand("notExisting");
		expect(result).toEqual([]);
	});
	it("should return empty array when input is same as existing command", () => {
		const result = findAvailableCommand("clear");
		expect(result).toEqual([]);
	});
});
