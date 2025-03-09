import type { CommandType, CountType, TestType } from "$lib/types/storage";

type LocalStorageCommonKeys = "COMMAND" | "TEST" | "COUNT";

export type LocalStorageGetType = {
	[K in LocalStorageCommonKeys]: K extends "COMMAND"
		? CommandType[]
		: K extends "TEST"
			? TestType[]
			: CountType;
};

export type LocalStorageSetType = {
	COMMAND: CommandType[];
	TEST: TestType;
	COUNT: CountType;
};
