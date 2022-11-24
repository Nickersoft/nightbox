<script lang="ts">
	import sources from '$lib/sources';

	import { Source } from '$lib/components';
</script>

<svelte:head>
	<title>Nightbox – Explore dark color palettes</title>
</svelte:head>

<main class="w-full lg:container mx-auto py-8">
	<header>
		<h1>Nightbox</h1>
		<span>Dark color palettes</span>
		<div class="divider" />
	</header>

	<div class="flex flex-col gap-16">
		{#each sources as source, idx}
			<div class="source-wrapper" style="--delay: {500 + idx * 50}ms">
				<Source {source} />
			</div>
		{/each}
	</div>

	<footer class="text-white py-16 text-sm text-opacity-40 text-center">
		Made with ❤️ by <a
			class="text-opacity-60 text-white"
			target="_blank"
			rel="noreferrer"
			href="https://tylernickerson.com"
		>
			Tyler Nickerson
		</a>
	</footer>
</main>

<style lang="postcss">
	@keyframes enter {
		0% {
			@apply opacity-0;
		}

		100% {
			@apply opacity-100;
		}
	}

	header {
		@apply py-16 relative drop-shadow-sm text-center;

		animation-name: enter;
		animation-timing-function: ease-in-out;
		animation-duration: 1000ms;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;

		h1 {
			@apply text-6xl lg:text-8xl text-transparent font-display py-2 bg-clip-text bg-gradient-to-b from-white to-slate-300 w-full h-full;
		}

		span {
			@apply text-sm lg:text-lg opacity-60 font-light text-white font-display py-4 block uppercase tracking-widest;
		}
	}

	.source-wrapper {
		animation-name: enter;
		animation-timing-function: ease-in-out;
		animation-duration: 1000ms;
		animation-fill-mode: both;
		animation-iteration-count: 1;
		animation-delay: var(--delay);
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
