<script lang="ts">
	import namer from 'color-namer';
	import ctc from 'copy-to-clipboard';

	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import Copy from './Copy.svelte';

	export let index: number;
	export let hex: string;

	const dispatch = createEventDispatcher();

	function handleCopy() {
		ctc(hex);
		dispatch('copied');
	}

	$: name = namer(hex).ntc[0]?.name ?? hex;
</script>

<li
	class="item"
	out:fade={{ duration: 300 }}
	in:fly={{ x: -10, duration: 300, delay: 300 + index * 10 }}
>
	<div on:keydown={handleCopy} on:click={handleCopy} class="color" style="--color: {hex};">
		<div class="copy">
			<Copy />
		</div>
	</div>

	<div class="relative label">
		<span>{name}</span>
		<span class="label">{hex}</span>
	</div>
</li>

<style lang="postcss">
	.item {
		@apply flex flex-col gap-4 justify-center items-center cursor-pointer;

		&:hover {
			.color {
				@apply lg:-translate-y-1;

				.copy {
					@apply opacity-100;
				}

				.copy :global(svg) {
					@apply scale-100;
				}
			}

			.label {
				@apply text-white opacity-100;

				span:first-of-type {
					@apply -translate-y-1 opacity-0;
				}

				span:last-of-type {
					@apply translate-y-0 opacity-100;
				}
			}
		}

		.label {
			@apply text-white w-20 text-xs opacity-40 transition-opacity italic relative mb-8;

			span {
				@apply absolute top-0 left-0 text-center w-full transition-all duration-300;

				&:first-of-type {
					@apply translate-y-0 opacity-100;
				}

				&:last-of-type {
					@apply translate-y-1 opacity-0;
				}
			}
		}

		.color {
			@apply overflow-hidden h-16 w-28 rounded-md bg-red-50 transition-transform duration-300 cursor-pointer active:scale-95;
			@apply border border-white border-opacity-10;

			background-color: var(--color);

			.copy {
				@apply transform-gpu w-full h-full bg-black bg-opacity-10 flex flex-col gap-1 justify-center items-center opacity-0 transition-all duration-300;

				:global(svg) {
					@apply scale-95 transition-all duration-300;
				}
			}
		}
	}
</style>
