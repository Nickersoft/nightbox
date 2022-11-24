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

	<div class="flex flex-col gap-16 sources-wrapper">
		{#each sources as source, idx}
			<Source {source} />
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
			transform: translateY(10px);
		}

		100% {
			@apply opacity-100;
			transform: translateY(0px);
		}
	}

	header {
		@apply py-16 relative drop-shadow-sm text-center;

		animation-name: enter;
		animation-timing-function: ease-in-out;
		animation-duration: 500ms;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;

		h1 {
			@apply text-6xl lg:text-8xl text-transparent font-display py-2 bg-clip-text bg-gradient-to-b from-white to-slate-300 w-full h-full;
		}

		span {
			@apply text-sm lg:text-lg opacity-60 font-light text-white font-display py-4 block uppercase tracking-widest;
		}
	}

	.sources-wrapper {
		animation-name: enter;
		animation-timing-function: ease-in-out;
		animation-duration: 500ms;
		animation-fill-mode: both;
		animation-iteration-count: 1;
		animation-delay: 250ms;
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
