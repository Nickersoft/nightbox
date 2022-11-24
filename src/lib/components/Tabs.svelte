<script lang="ts" context="module">
	import type { SourceType } from '$lib/types';

	export type TabType = keyof SourceType['colors'];
</script>

<script lang="ts">
	export let tabs: TabType[];
	export let selectedTab: TabType;

	function selectTab(tab: typeof selectedTab) {
		selectedTab = tab;
	}
</script>

<ul class="nav">
	{#each tabs as tab}
		{@const select = () => selectTab(tab)}

		<li on:keydown={select} on:click={select} class:active={selectedTab === tab}>
			{tab}
		</li>
	{/each}
</ul>

<style lang="postcss">
	.nav {
		@apply flex flex-row justify-start lg:justify-end w-full gap-8 items-center;

		li {
			@apply relative capitalize text-sm opacity-60 font-normal text-white font-display py-4 block cursor-pointer;

			&.active {
				@apply opacity-100;

				&:after {
					@apply w-full;
				}
			}

			&:not(.active):hover:after {
				@apply w-full;
			}

			&:after {
				@apply w-0 bottom-2 bg-white absolute left-0 transition-all duration-300 ease-out;

				height: 2px;
				content: '';
			}
		}
	}
</style>
