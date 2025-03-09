import { describe, expect, it } from "vitest";

import { COMMANDS } from "../../src/lib/constants/command";
import { makeHelpOutput } from "../../src/lib/utils/command";

describe("makeHelpOutput()", () => {
	it("all commands should be in the result", () => {
		const commands = Object.values(COMMANDS);
		const helpOutput = makeHelpOutput();
		commands.forEach((command) => {
			expect(helpOutput).toContain(command);
		});
	});
	it('length of "help" command should be same with the number of commands', () => {
		const commands = Object.values(COMMANDS);
		const helpOutput = makeHelpOutput();
		const lineCount = helpOutput.split("\n").length - 2;
		expect(lineCount).toBe(commands.length);
	});
});
