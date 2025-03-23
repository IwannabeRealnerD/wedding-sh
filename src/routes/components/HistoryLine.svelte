<script lang="ts">
	import clsx from "clsx";

	import Prompt from "$lib/components/Prompt.svelte";

	import { commandValidator } from "$lib/utils/command";

	interface Props {
		command: { command: string; result: string };
	}

	let { command }: Props = $props();
</script>

<article class="border-secondary border-b border-dashed py-2">
	<div class="flex">
		<Prompt />
		<p class={clsx("w-full break-all", commandValidator(command.command))}>
			{command.command}
		</p>
	</div>
	<p class="text-primary break-all whitespace-pre-wrap">{command.result}</p>
</article>
