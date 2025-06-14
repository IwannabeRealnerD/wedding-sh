<script lang="ts">
	import clsx from "clsx";
	import { onDestroy, onMount, tick } from "svelte";

	import { findNextIndex, findPreviousIndex } from "./util";

	interface Props {
		currentInput: string;
		onSuggestionClick: (validCommand: string) => void;
		availableCommands: string[];
	}

	let props: Props = $props();

	let wrapperElement: HTMLElement | undefined = $state();
	let pElement: HTMLElement | undefined = $state();
	let focusIndex = $state(0);
	let isWholeCommand = $derived(props.availableCommands[focusIndex] === props.currentInput);

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
			props.onSuggestionClick(selectedCommand);
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

<!-- NOTE: left-26 is hardcoded for the width of prompt  -->
<article
	style="margin-left: {leftMargin}px"
	class="bg-foreground absolute bottom-2/3 left-26 min-w-32"
	bind:this={wrapperElement}
>
	<ul class="bg-white">
		{#each props.availableCommands as command, index (command)}<li>
				<button
					class={clsx("w-full cursor-pointer p-1 text-start", {
						"bg-[#0000ff] text-white": index === focusIndex
					})}
					onclick={() => {
						const selectedCommand = props.availableCommands[index];
						props.onSuggestionClick(selectedCommand);
					}}>{command}</button
				>
			</li>{/each}
	</ul>
	<p bind:this={pElement} class="text-alert invisible absolute" aria-hidden={true}>
		{props.currentInput}
	</p>
</article>
