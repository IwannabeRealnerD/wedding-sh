import { HELP_COMMAND } from "$lib/constants/command";

import type { LocalStorageGetType, LocalStorageSetType } from "./type";

export const resetLocalStorage = (key: keyof LocalStorageGetType) => {
	localStorage.removeItem(key);
};

export const getLocalStorageItem = <T extends keyof LocalStorageGetType>(
	key: T
): LocalStorageGetType[T] | undefined => {
	try {
		const serializedData = localStorage.getItem(key);
		if (serializedData === null) {
			resetLocalStorage(key);
			return undefined;
		}
		return JSON.parse(serializedData);
	} catch {
		return undefined;
	}
};

export const setLocalStorageItem = <T extends keyof LocalStorageSetType>(
	key: T,
	value: LocalStorageSetType[T]
) => {
	const serializedData = JSON.stringify(value);
	localStorage.setItem(key, serializedData);
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
