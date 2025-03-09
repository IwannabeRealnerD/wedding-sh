import type { COMMANDS } from "$lib/constants/command";

export type TCommandKeys = keyof typeof COMMANDS;
export type TCommandValues = (typeof COMMANDS)[TCommandKeys];
