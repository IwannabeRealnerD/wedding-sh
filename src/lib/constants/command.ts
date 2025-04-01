import { COMMAND_DEFINITIONS } from "$settings";

export const COMMANDS = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([key]) => [key])
) satisfies { [K in keyof typeof COMMAND_DEFINITIONS]: string };

export const COMMAND_KEYS = Object.keys(COMMAND_DEFINITIONS) satisfies Array<
	keyof typeof COMMAND_DEFINITIONS
>;
