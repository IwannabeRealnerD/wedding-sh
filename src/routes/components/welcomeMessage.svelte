<script lang="ts">
	const logo =
		"██╗    ██╗███████╗██████╗ ██████╗ ██╗███╗   ██╗ ██████╗       ███████╗██╗  ██╗\n██║    ██║██╔════╝██╔══██╗██╔══██╗██║████╗  ██║██╔════╝       ██╔════╝██║  ██║\n██║ █╗ ██║█████╗  ██║  ██║██║  ██║██║██╔██╗ ██║██║  ███╗█████╗███████╗███████║\n██║███╗██║██╔══╝  ██║  ██║██║  ██║██║██║╚██╗██║██║   ██║╚════╝╚════██║██╔══██║\n╚███╔███╔╝███████╗██████╔╝██████╔╝██║██║ ╚████║╚██████╔╝      ███████║██║  ██║\n╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝       ╚══════╝╚═╝  ╚═╝";
</script>

{#snippet infoBlock(title: string, content: string)}
	<div class="ml-3">
		<p class="text-primary">
			{title}:
		</p>
		<p class="text-highlight break-all whitespace-pre-line">
			{content}
		</p>
	</div>
{/snippet}

<article class="border-secondary border-b border-dashed py-2">
	<pre class="ascii-art">{logo}</pre>
	<p class="text-primary">wedding-sh (v0.0.1)</p>
	<div class="flex flex-col gap-2">
		<h2 class="text-alert font-bold">[SYSTEM NOTIFICATION]: Incoming Wedding Event Detected</h2>
		{@render infoBlock(
			"Who's getting married?",
			`${import.meta.env.VITE_PARTNER1_NAME} & ${import.meta.env.VITE_PARTNER2_NAME}`
		)}
		{@render infoBlock("Timestamp", "2025-05-31T12:00:00+09:00 (2025-05-31 12:00PM)")}
		{@render infoBlock(
			"Location",
			"Nuage Garden(누아주가든)\n[Korea > Gyeonggi-do > Hanam > Misa]"
		)}
		{@render infoBlock("Address", "경기 하남시 미사동로40번길 229")}
		{@render infoBlock(
			"How to get there – by Public Transportation",
			"Shuttle bus from Seoul Metropolitan Subway Line No.5(Purple Line) Misa station"
		)}
		{@render infoBlock(
			"How to get there – by Personal Transportation",
			"Parking available for up to 100 vehicles"
		)}
		{@render infoBlock(
			"What to wear?",
			"No dress code – wear whatever makes you feel comfortable!"
		)}
		<p class="text-primary">
			For more information about the wedding, use the <span class="text-highlight">help</span> command.
		</p>
		<p class="text-primary">
			You can submit your command with <span class="text-highlight">the Enter</span> key.
		</p>
	</div>
</article>
