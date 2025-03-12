import { COMMANDS } from "$lib/constants/command";
import type { TCommandValues } from "$lib/types/command";

export const historyLengthCutter = <T>(commandArr: T[]): T[] => {
	return commandArr.slice(-40);
};

export const commandValidator = (
	userInputCommand: string,
	availableCommands?: string[]
) => {
	const isValidInput = Object.values(COMMANDS).includes(
		userInputCommand as TCommandValues
	);
	if (isValidInput) {
		return "text-highlight";
	}
	if (availableCommands && availableCommands.length !== 0) {
		return "text-white";
	}
	return "text-alert";
};
