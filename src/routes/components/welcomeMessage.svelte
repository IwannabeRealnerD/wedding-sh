<script lang="ts">
</script>

{#snippet infoBlock(title: string, content: string)}
	<div class="ml-3">
		<p class="text-primary">
			{title}:
		</p>
		<p class="text-highlight">
			{content}
		</p>
	</div>
{/snippet}

<article class="border-secondary border-b border-dashed">
	<p class="text-primary">wedding-sh (v0.0.1)</p>
	<div class="flex flex-col gap-2">
		<h2 class="text-alert font-bold">[SYSTEM NOTIFICATION]: Incoming Wedding Event Detected</h2>
		{@render infoBlock("Who's getting married?", 'Honggwan Jeong, Cinderella Reimers')}
		{@render infoBlock('Timestamp', '2025-05-31T12:00:00+09:00')}
		{@render infoBlock('Location', 'Nuage Garden [Korea > Hanam > Misa]')}
		{@render infoBlock('Address', '경기 하남시 미사동로40번길 229')}
		{@render infoBlock(
			'Getting There by Public Transportation',
			'Shuttle bus from Seoul Metropolitan Subway Line No.5(Purple Line) Misa station'
		)}
		{@render infoBlock(
			'Getting There by Personal Transportation',
			'Parking available for up to 100 vehicles'
		)}
		<p class="text-primary">
			For more information about the wedding, use the <span class="text-highlight">help</span> command.
		</p>
	</div>
</article>
