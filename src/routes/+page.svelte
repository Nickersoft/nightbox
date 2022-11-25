<script lang="ts">
	import sources from '$lib/sources';

	import { Search, Source, Toast } from '$lib/components';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let copied: boolean = false;
	let query: string = '';

	function showToast() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	$: filtered = sources
		.filter((source) => source.name.toLowerCase().includes(query.toLowerCase()))
		.sort((a, b) => (a.name > b.name ? 1 : -1));

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if copied}
	<Toast>Copied to clipboard!</Toast>
{/if}

<svelte:head>
	<title>Nightbox – Explore dark color palettes</title>
</svelte:head>

{#if mounted}
	<main class="w-full lg:container mx-auto py-8">
		<header in:fly={{ y: 25, duration: 600 }}>
			<h1>Nightbox</h1>
			<span>Dark color palettes</span>
			<div class="divider" />
			<div in:fly={{ y: 25, duration: 600, delay: 300 }}>
				<Search bind:value={query} />
			</div>
		</header>

		<div class="flex flex-col gap-16" in:fly={{ y: 25, duration: 600, delay: 600 }}>
			{#each filtered as source}
				<Source {source} on:copied={showToast} />
			{/each}
		</div>

		<footer>
			Made with ❤️ by <a target="_blank" rel="noreferrer" href="https://tylernickerson.com">
				Tyler Nickerson
			</a>
			|
			<a rel="noreferrer" href="https://github.com/Nickersoft/nightbox" target="_blank">
				Contribute on GitHub
			</a>
		</footer>
	</main>
{/if}

<style lang="postcss">
	header {
		@apply py-16 relative drop-shadow-sm text-center;

		h1 {
			@apply text-6xl lg:text-8xl text-transparent font-display py-2 bg-clip-text bg-gradient-to-b from-white to-slate-300 w-full h-full;
		}

		span {
			@apply text-sm lg:text-lg opacity-60 font-light text-white font-display py-4 block uppercase tracking-widest;
		}
	}

	footer {
		@apply text-white py-16 text-sm text-opacity-40 text-center;

		a {
			@apply text-opacity-60 text-white;
		}
	}
	.divider {
		@apply w-full lg:w-1/2 mx-auto h-16 relative overflow-hidden mt-4;
	}

	.divider:after {
		@apply w-full h-32 absolute -top-16 left-0;

		background: radial-gradient(closest-side, theme(colors.slate.800), transparent);
		content: '';
	}
</style>
