<script lang="ts">
	import "../styles/app.css";

	interface Props {
		children?: import("svelte").Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
