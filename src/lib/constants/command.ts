import { COMMAND_DEFINITIONS } from "$settings";

export const COMMANDS = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([key]) => [key])
) as { [K in keyof typeof COMMAND_DEFINITIONS]: string };

export const COMMAND_KEYS = Object.keys(COMMAND_DEFINITIONS) as string[];

export const COMMAND_ACTIONS = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([key, def]) => [key, def.action])
) as Record<string, () => string>;
