import type { CommandType } from "$lib/types/storage";

type LocalStorageCommonKeys = "COMMAND";

export type LocalStorageGetType = {
	[K in LocalStorageCommonKeys]: K extends "COMMAND" ? CommandType[] : never;
};

export type LocalStorageSetType = {
	COMMAND: CommandType[];
};
