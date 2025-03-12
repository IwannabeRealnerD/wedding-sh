<script lang="ts">
</script>

{#snippet infoBlock(title: string, content: string)}
	<div class="ml-4">
		<p class="text-primary">
			{title}:
		</p>
		<p class="text-highlight">
			{content}
		</p>
	</div>
{/snippet}

<article class="border-b border-dashed border-secondary">
	<p class="text-primary">wedding-sh (v0.0.1)</p>
	<div class="flex flex-col gap-2">
		<h2 class="text-alert font-bold">
			[SYSTEM NOTIFICATION]: Incoming Wedding Event Detected
		</h2>
		{@render infoBlock(
			"Who's getting married?",
			"Honggwan Jeong, Cinderella Reimers"
		)}
		{@render infoBlock("Timestamp", "2025/05/31 12:00pm")}
		{@render infoBlock("Location", "Nuage Garden [Korea > Hanam > Misa]")}
		{@render infoBlock(
			"How to get there - Public Transportation",
			"Shuttle bus from Seoul Metropolitan Subway Line No.5(Purple Line) Misa station"
		)}
		{@render infoBlock(
			"How to get there - Personal Transportation",
			"Parking available for up to 100 vehicles"
		)}
		<p class="text-primary">
			Get more information from wedding-sh. You can start with <span
				class="text-highlight">help</span
			> command
		</p>
	</div>
</article>
