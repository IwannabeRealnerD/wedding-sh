<script lang="ts">
	import { onMount, tick } from "svelte";

	import { TERMINAL_HISTORY_KEY } from "$lib/constants/localStorageKey";
	import type { CommandType } from "$lib/types/storage";
	import { historyLengthCutter } from "$lib/utils/command";
	import { getLocalStorageItem } from "$lib/utils/storage";

	import { UserInputForm, WelcomeMessage, HistoryLine } from "./components";

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

<main class="container">
	<div>
		{#if commandArr === undefined || commandArr.length === 0}
			<WelcomeMessage />
		{/if}
		{#if commandArr}
			{#each commandArr as command}
				<HistoryLine {command} />
			{/each}
		{/if}
		<UserInputForm bind:commandArr bind:inputBind />
	</div>
</main>

<style>
	.container {
		padding: 1rem;
	}
</style>
