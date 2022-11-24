<script lang="ts">
	import type { SourceType } from '$lib/types';
	import Open from './Open.svelte';

	import Palette from './Palette.svelte';
	import Tabs, { type TabType } from './Tabs.svelte';

	export let source: SourceType;

	let selectedTab: TabType = 'backgrounds';

	$: colors = source.colors[selectedTab]?.sort() ?? [];
	$: tabs = Object.keys(source.colors).filter(Boolean).sort() as TabType[];
</script>

<div class="source">
	<header>
		<img alt={source.name} src="/icons/{source.icon}" class="icon" />
		<h2>{source.name}</h2>
		<a
			class="hover:opacity-100 opacity-60 transition-opacity"
			href={source.url}
			target="_blank"
			rel="noreferrer"
		>
			<Open />
		</a>
		<Tabs {tabs} bind:selectedTab />
	</header>

	<div class="relative w-full h-40">
		{#key selectedTab}
			<Palette {colors} on:copied />
		{/key}
	</div>
</div>

<style lang="postcss">
	.source {
		@apply flex flex-col gap-8;

		header {
			@apply flex flex-row flex-wrap lg:flex-nowrap justify-start items-center gap-8 px-8;

			h2 {
				@apply font-display text-4xl lg:text-5xl text-white flex-shrink-0;
			}

			.icon {
				@apply w-12 h-12 lg:w-16 lg:h-16 object-cover;
			}
		}
	}
</style>
