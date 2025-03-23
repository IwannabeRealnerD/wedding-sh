import { COMMAND_KEYS } from "$lib/constants/command";

export const historyLengthCutter = <T>(commandArr: T[]): T[] => {
	return commandArr.slice(-40);
};

/**
 * Validates the user input command and returns the color utility class based on the command
 * @param userInputCommand - User input command
 * @param availableCommands - Available commands
 * @returns returns the color utility class based on the command
 */
export const commandValidator = (userInputCommand: string, availableCommands?: string[]) => {
	const isValidInput = COMMAND_KEYS.includes(userInputCommand);
	if (isValidInput) {
		return "text-highlight";
	}
	if (availableCommands && availableCommands.length !== 0) {
		return "text-white";
	}
	return "text-alert";
};
