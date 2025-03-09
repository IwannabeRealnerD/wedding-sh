import { COMMAND_ACTIONS, COMMANDS } from "$lib/constants/command";
import { TERMINAL_HISTORY_KEY } from "$lib/constants/localStorageKey";
import type { TCommandValues } from "$lib/types/command";
import type { CommandType } from "$lib/types/storage";
import { historyLengthCutter } from "$lib/utils/command";
import { getLocalStorageItem, setLocalStorageItem } from "$lib/utils/storage";

export const findNextIndex = (targetArray: unknown[], currentIndex: number) => {
	return targetArray.length - 1 <= currentIndex ? 0 : currentIndex + 1;
};

export const findPreviousIndex = (
	targetArray: unknown[],
	currentIndex: number
) => {
	return currentIndex - 1 < 0 ? targetArray.length - 1 : currentIndex - 1;
};

export const findAvailableCommand = (inputCommand: string) => {
	if (inputCommand === "") {
		return [];
	}
	const commandArr = Object.values(COMMANDS);
	const filteredCommandArr = commandArr.filter((command) =>
		command.startsWith(inputCommand)
	);
	if (filteredCommandArr.find((command) => command === inputCommand)) {
		return [];
	}
	return filteredCommandArr;
};

export const outputCreator = (inputCommand: string) => {
	const action = COMMAND_ACTIONS[inputCommand as TCommandValues];
	return action ? action() : `khanne-sh: command not found: ${inputCommand}`;
};

export const putLocalStorageArr = (commandObj: CommandType) => {
	const prevCommandArr = getLocalStorageItem(TERMINAL_HISTORY_KEY);
	if (prevCommandArr === undefined) {
		setLocalStorageItem(TERMINAL_HISTORY_KEY, [commandObj]);
		return;
	}
	if (prevCommandArr.length > 50) {
		const shortCommandArr = historyLengthCutter(prevCommandArr);
		shortCommandArr.push(commandObj);
		setLocalStorageItem(TERMINAL_HISTORY_KEY, shortCommandArr);
		return;
	}
	prevCommandArr.push(commandObj);
	setLocalStorageItem(TERMINAL_HISTORY_KEY, prevCommandArr);
};

export const clearStorageArr = () => {
	setLocalStorageItem(TERMINAL_HISTORY_KEY, []);
};
