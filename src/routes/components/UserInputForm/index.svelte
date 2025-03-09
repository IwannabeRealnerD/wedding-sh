<script lang="ts">
	import { tick } from "svelte";

	import { COMMANDS } from "$lib/constants/command";
	import type { CommandType } from "$lib/types/storage";
	import { historyLengthCutter, isValidCommand } from "$lib/utils/command";

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
</script>

<form onsubmit={commandOnSubmit} autocomplete="off" class="formContainer">
	{#if availableCommands.length !== 0 && !isWholeCommand}
		<AutoComplete
			onChangeCommand={changeCommandHandler}
			currentInput={inputCommand}
			{availableCommands}
		/>
	{/if}
	<p class="userInputCommand">khanne-sh :</p>
	<input
		class={`inputTag ${isValidCommand(inputCommand)}`}
		name="command"
		bind:value={inputCommand}
		bind:this={inputBind}
	/>
</form>

<style>
	.container {
		padding: 1rem;
	}
	.formContainer {
		display: flex;
		padding: 0.5rem 0;
		position: relative;
	}
	.userInputCommand {
		color: #57c6fe;
		width: 6rem;
	}
	.commandOutput {
		white-space: pre-wrap;
		color: #f1f0ef;
	}
	.previousInput {
		width: 100%;
	}
	.inputTag {
		width: 100%;
		border: none;
		background-color: transparent;
		caret-color: white;
		padding: 0;
		margin-bottom: 2rem;
	}
	.inputTag:focus {
		outline: none;
	}
	.validInput {
		color: #5af68d;
	}
	.invalidInput {
		color: #fe5b56;
	}
</style>
