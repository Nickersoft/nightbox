<script lang="ts">
	import palettes from '$lib/palettes';

	import Palette from './Palette';
</script>

<svelte:head>
	<title>Nightbox – Explore dark color palettes</title>
</svelte:head>

<main class="container mx-auto py-8 px-32">
	<header class="py-16">
		<div
			class="relative drop-shadow-sm py-4 bg-clip-text bg-gradient-to-b from-white to-slate-300 w-full h-full text-center"
		>
			<h1 class="text-8xl text-transparent font-display">Nightbox</h1>
			<span
				class="text-lg opacity-60 font-light text-white font-display py-4 block uppercase tracking-widest"
			>
				Explore dark palettes
			</span>
		</div>
		<div class="divider" />
	</header>

	{#each palettes as palette}
		<Palette {palette} />
	{/each}
</main>

<style lang="postcss">
	.divider {
		@apply w-1/2 mx-auto h-16 relative overflow-hidden;
	}

	.divider:after {
		@apply w-full h-32 absolute -top-16 left-0;

		background: radial-gradient(closest-side, theme(colors.slate.800), transparent);
		content: '';
	}
</style>
