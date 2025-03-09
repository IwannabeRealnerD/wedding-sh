<script lang="ts">
	import clsx from "clsx";
	import { onDestroy, onMount, tick } from "svelte";

	import { findNextIndex, findPreviousIndex } from "./util";

	interface Props {
		currentInput: string;
		onChangeCommand: (command: string) => void;
		availableCommands: string[];
	}

	let props: Props = $props();

	let pElement: HTMLElement | undefined = $state();
	let focusIndex = $state(0);
	let isWholeCommand = $derived(
		props.availableCommands[focusIndex] === props.currentInput
	);

	const onDownArrowDown = (KeyboardDownEvent: KeyboardEvent) => {
		if (KeyboardDownEvent.code === "Enter" && isWholeCommand) {
			return;
		}

		if (KeyboardDownEvent.code === "ArrowDown") {
			KeyboardDownEvent.preventDefault();
			focusIndex = findNextIndex(props.availableCommands, focusIndex);
			return;
		}
		if (KeyboardDownEvent.code === "ArrowUp") {
			KeyboardDownEvent.preventDefault();
			focusIndex = findPreviousIndex(props.availableCommands, focusIndex);
			return;
		}
		if (KeyboardDownEvent.code === "Enter") {
			KeyboardDownEvent.preventDefault();
			const selectedCommand = props.availableCommands[focusIndex];
			props.onChangeCommand(selectedCommand);
			return;
		}
	};
	onMount(() => {
		window.addEventListener("keydown", onDownArrowDown);
	});
	onDestroy(() => {
		window.removeEventListener("keydown", onDownArrowDown);
	});

	let leftMargin = $state(0);

	$effect(() => {
		if (props.currentInput) {
			tick().then(() => {
				leftMargin = pElement?.offsetWidth || 0;
			});
		}
	});
</script>

<article style="margin-left: {leftMargin}px" class="wrapper">
	<ul>
		{#each props.availableCommands as command, index (command)}<li>
				<button
					class={clsx("suggestionContainer", {
						activeSuggestion: index === focusIndex
					})}
					onclick={() => {
						focusIndex = index;
					}}>{command}</button
				>
			</li>{/each}
	</ul>
	<p bind:this={pElement} class="forCurrentInputSize" aria-hidden={true}>
		{props.currentInput}
	</p>
</article>

<style>
	.wrapper {
		background-color: ivory;
		position: absolute;
		top: 50%;
		left: 5.5rem;
		min-width: 8rem;
	}
	.suggestionContainer {
		padding: 0.3rem;
	}
	.activeSuggestion {
		background-color: blue;
		color: white;
		width: 100%;
		text-align: start;
	}
	.forCurrentInputSize {
		visibility: hidden;
		position: absolute;
	}
</style>
