<script lang="ts">
	import { isValidCommand } from "$lib/utils/command";

	interface Props {
		command: { command: string; result: string };
	}

	let { command }: Props = $props();
</script>

<article class="commandWrapper">
	<div class="commandContainer">
		<p class="userInputCommand">khanne-sh :</p>
		<p class={`previousInput ${isValidCommand(command.command)}`}>
			{command.command}
		</p>
	</div>
	<p class="commandOutput">{command.result}</p>
</article>

<style>
	.commandWrapper {
		border-bottom: dashed 1.5px #686767;
		padding: 0.5rem 0;
	}
	.commandContainer {
		display: flex;
	}
	.userInputCommand {
		color: #57c6fe;
		width: 6rem;
	}
	.previousInput {
		width: 100%;
	}
	.commandOutput {
		white-space: pre-wrap;
		color: #f1f0ef;
	}
	.invalidInput {
		color: #fe5b56;
	}
	.validInput {
		color: #5af68d;
	}
</style>
