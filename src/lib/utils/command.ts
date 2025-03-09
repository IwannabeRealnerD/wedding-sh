import { COMMANDS, HELP_COMMAND } from "$lib/constants/command";
import type { TCommandValues } from "$lib/types/command";

export const historyLengthCutter = <T>(commandArr: T[]): T[] => {
	return commandArr.slice(-40);
};

export const isValidCommand = (userInputCommand: string) => {
	const isValidInput = Object.values(COMMANDS).includes(
		userInputCommand as TCommandValues
	);
	if (isValidInput) {
		return "validInput";
	}
	return "invalidInput";
};

export const makeHelpOutput = () => {
	let commandOutput = "Here are commands that you can use: \n";
	Object.entries(HELP_COMMAND).forEach(([command, commandResult], index) => {
		commandOutput = commandOutput.concat(
			` ${index + 1}. ${command} : ${commandResult}\n`
		);
	});
	return commandOutput;
};
