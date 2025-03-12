<script lang="ts">
	import clsx from "clsx";
	import { tick } from "svelte";

	import { COMMANDS } from "$lib/constants/command";
	import type { CommandType } from "$lib/types/storage";
	import { historyLengthCutter, commandValidator } from "$lib/utils/command";

	import AutoComplete from "./AutoComplete.svelte";
	import {
		clearStorageArr,
		findAvailableCommand,
		outputCreator,
		putLocalStorageArr
	} from "./util";

	interface Props {
		commandArr: CommandType[] | undefined;
		inputBind: HTMLElement | undefined;
	}

	let { commandArr = $bindable([]), inputBind = $bindable() }: Props = $props();

	let inputCommand = $state("");

	const changeCommandHandler = (command: string) => {
		inputCommand = command;
	};

	let availableCommands = $derived(findAvailableCommand(inputCommand));
	let isWholeCommand = $derived(
		Object.values(COMMANDS).find((value) => value === inputCommand)
	);

	const commandOnSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (inputCommand == "clear") {
			commandArr = [];
			inputCommand = "";
			clearStorageArr();
			return;
		}
		const commandObject = {
			command: inputCommand,
			result: outputCreator(inputCommand)
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

	$effect(() => {
		console.log(commandValidator(inputCommand, availableCommands));
	});
</script>

<form onsubmit={commandOnSubmit} autocomplete="off" class="flex relative py-2">
	{#if availableCommands.length !== 0 && !isWholeCommand}
		<AutoComplete
			onChangeCommand={changeCommandHandler}
			currentInput={inputCommand}
			{availableCommands}
		/>
	{/if}
	<p class="text-info shrink-0">
		wedding-sh<span class="text-secondary text-sm mx-2">>></span>
	</p>
	<input
		class={clsx(
			`w-full border-none bg-transparent caret-white p-0 mb-8 focus:outline-none`,
			commandValidator(inputCommand, availableCommands)
		)}
		name="command"
		bind:value={inputCommand}
		bind:this={inputBind}
	/>
</form>
