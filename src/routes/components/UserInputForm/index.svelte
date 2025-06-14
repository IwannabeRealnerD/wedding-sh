<script lang="ts">
	import clsx from "clsx";
	import { tick } from "svelte";

	import { COMMAND_KEYS } from "$lib/constants/command";
	import type { CommandType } from "$lib/types/storage";
	import { historyLengthCutter, commandValidator } from "$lib/utils/command";

	import AutoComplete from "./AutoComplete.svelte";
	import { clearStorageArr, findAvailableCommand, outputCreator, putLocalStorageArr } from "./util";
	import Prompt from "$lib/components/Prompt.svelte";

	interface Props {
		commandArr: CommandType[] | undefined;
		inputBind: HTMLElement | undefined;
	}

	let { commandArr = $bindable([]), inputBind = $bindable() }: Props = $props();

	let inputCommand = $state("");

	let isComposing = false;

	let availableCommands = $derived(findAvailableCommand(inputCommand));
	let isWholeCommand = $derived(COMMAND_KEYS.find((value) => value === inputCommand));

	const handleCommandInput = async (validCommand: string) => {
		if (validCommand == "clear") {
			commandArr = [];
			inputCommand = "";
			clearStorageArr();
			return;
		}
		const commandObject = {
			command: validCommand,
			result: outputCreator(validCommand)
		};
		putLocalStorageArr(commandObject);
		if (!commandArr) {
			commandArr = [commandObject];
			inputCommand = "";
			await tick();
			scroll(0, document.body.scrollHeight);
			return;
		}
		const cutArr = historyLengthCutter(commandArr);
		commandArr = [...cutArr, commandObject];
		inputCommand = "";
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
	};

	let isSuggestionVisible = $derived(availableCommands.length !== 0 && !isWholeCommand);
</script>

<form autocomplete="off" class="relative flex pt-2">
	{#if isSuggestionVisible}
		<AutoComplete
			onSuggestionClick={handleCommandInput}
			currentInput={inputCommand}
			{availableCommands}
		/>
	{/if}
	<Prompt />
	<textarea
		class={clsx(
			`h-20 w-full resize-none overflow-hidden border-none bg-conic-270 p-0 caret-white focus:outline-none`,
			commandValidator(inputCommand, availableCommands)
		)}
		oncompositionstart={() => (isComposing = true)}
		oncompositionend={() => (isComposing = false)}
		name="command"
		onkeydown={(event) => {
			if (isSuggestionVisible) {
				if (event.key === "Enter" && !isComposing) {
					event.preventDefault();
				}
				return;
			}
			if (event.key === "Enter" && !isComposing) {
				event.preventDefault();
				handleCommandInput(inputCommand);
			}
		}}
		bind:value={inputCommand}
		bind:this={inputBind}
	></textarea>
</form>
