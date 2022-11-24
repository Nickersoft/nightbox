<script lang="ts">
	import type { SourceType } from '$lib/types';
	import Open from './Open.svelte';

	import Palette from './Palette.svelte';
	import Tabs from './Tabs.svelte';
	import Toast from './Toast.svelte';

	export let source: SourceType;

	let copied: boolean = false;

	function showToast() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	let selectedTab: 'backgrounds' | 'primaries' | 'text' = 'backgrounds';

	$: colors = source[selectedTab];
</script>

{#if copied}
	<Toast>Copied to clipboard!</Toast>
{/if}

<div class="source">
	<header>
		<img alt="Linear" src="/icons/{source.icon}" class="icon" />
		<h2>{source.name}</h2>
		<a
			class="hover:opacity-100 opacity-60 transition-opacity"
			href={source.url}
			target="_blank"
			rel="noreferrer"
		>
			<Open />
		</a>
		<Tabs bind:selectedTab />
	</header>

	<div class="relative w-full h-40">
		{#key selectedTab}
			<Palette {colors} on:copied={showToast} />
		{/key}
	</div>
</div>

<style lang="postcss">
	.source {
		@apply flex flex-col gap-8;

		header {
			@apply flex flex-row flex-wrap lg:flex-nowrap justify-start items-center gap-8 px-8;

			h2 {
				@apply font-display text-4xl lg:text-6xl text-white;
			}

			.icon {
				@apply w-12 h-12 lg:w-16 lg:h-16 bg-red-50 rounded-lg;
			}
		}
	}
</style>
