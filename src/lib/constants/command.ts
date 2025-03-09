import { COMMAND_DEFINITIONS } from "$settings";

export const COMMANDS = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([key, def]) => [key, def.name])
) as { [K in keyof typeof COMMAND_DEFINITIONS]: string };

export const HELP_COMMAND = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([, def]) => [
		def.name,
		def.description
	])
) as Record<string, string>;

export const COMMAND_ACTIONS = Object.fromEntries(
	Object.entries(COMMAND_DEFINITIONS).map(([, def]) => [def.name, def.action])
) as Record<string, () => string>;
