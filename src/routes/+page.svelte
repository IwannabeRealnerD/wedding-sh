<script lang="ts">
	import { onMount, tick } from "svelte";

	import { TERMINAL_HISTORY_KEY } from "$lib/constants/localStorageKey";
	import type { CommandType } from "$lib/types/storage";
	import { historyLengthCutter } from "$lib/utils/command";
	import { getLocalStorageItem } from "$lib/utils/storage";

	import HistoryLine from "./components/HistoryLine.svelte";
	import UserInputForm from "./components/UserInputForm/index.svelte";
	import WelcomeMessage from "./components/WelcomeMessage.svelte";

	let commandArr: CommandType[] | undefined = $state([]);
	let inputBind: HTMLElement | undefined = $state();

	onMount(async () => {
		let history = getLocalStorageItem(TERMINAL_HISTORY_KEY);
		if (history && history.length > 50) {
			history = historyLengthCutter(history);
		}
		commandArr = history;
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
		inputBind?.focus();
	});
</script>

<main>
	<div>
		<WelcomeMessage />
		{#if commandArr}
			{#each commandArr as command, index (`${command.command} ${index}`)}
				<HistoryLine {command} />
			{/each}
		{/if}
		<UserInputForm bind:commandArr bind:inputBind />
	</div>
</main>
