<script lang="ts">
	import clsx from "clsx";

	import { commandValidator } from "$lib/utils/command";

	interface Props {
		command: { command: string; result: string };
	}

	let { command }: Props = $props();
</script>

<article class="border-b border-dashed border-secondary">
	<div class="flex">
		<p class="text-info shrink-0">
			wedding-sh<span class="text-secondary text-sm mx-2">>></span>
		</p>
		<p class={clsx("w-full", commandValidator(command.command))}>
			{command.command}
		</p>
	</div>
	<p class="whitespace-pre-wrap text-primary">{command.result}</p>
</article>
