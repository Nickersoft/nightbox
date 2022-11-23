<script lang="ts">
	import namer from 'color-namer';
	import ctc from 'copy-to-clipboard';

	import { fade, fly } from 'svelte/transition';

	import type { PaletteType } from '$lib/types';

	export let palette: PaletteType;

	const tabs: (keyof typeof palette)[] = ['backgrounds', 'primaries', 'text'];

	let copied: boolean = false;
	let selectedIdx: number = 0;

	function copyColor(color: string) {
		ctc(color);

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

{#if copied}
	<div
		in:fly={{ y: 10, duration: 300 }}
		out:fly={{ y: -10, duration: 300 }}
		class="rounded-md bg-white bg-opacity-10 border border-white border-opacity-10 text-sm absolute bottom-4 left-1/2 -translate-x-1/2 px-8 py-2 text-white"
	>
		Copied to clipboard!
	</div>
{/if}

<div class="palette">
	<header>
		<img alt="Linear" src="/icons/linear.png" class="icon" />

		<h2>{palette.name}</h2>

		<ul class="nav">
			{#each tabs as tab, idx}
				<li
					on:keydown={() => (selectedIdx = idx)}
					on:click={() => (selectedIdx = idx)}
					class:active={selectedIdx === idx}
				>
					{tab}
				</li>
			{/each}
		</ul>
	</header>

	{#key selectedIdx}
		<ul class="colors">
			{#each palette[tabs[selectedIdx]] as color, idx}
				{@const cb = () => copyColor(color)}

				<li out:fade={{ duration: 300 }} in:fly={{ y: 10, duration: 300, delay: 300 + idx * 10 }}>
					<div on:keydown={cb} on:click={cb} class="color" style="--color: {color};">
						<div class="copy">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 256 256"
							>
								<path
									fill="#FFF"
									d="M232 36v140a12 12 0 0 1-24 0V48H80a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12Zm-40 40v140a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12Zm-24 12H52v116h116Z"
								/>
							</svg>
						</div>
					</div>
					<div class="relative label">
						<span>{namer(color).ntc[0]?.name}</span>
						<span class="label">{color}</span>
					</div>
				</li>
			{/each}
		</ul>
	{/key}
</div>

<style lang="postcss">
	.palette {
		@apply flex flex-col gap-8;

		header {
			@apply flex flex-row justify-start items-center gap-8;

			h2 {
				@apply font-display text-6xl text-white;
			}

			.icon {
				@apply w-16 h-16 bg-red-50 rounded-lg;
			}

			.nav {
				@apply flex flex-row justify-end w-full gap-8 items-center;

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
		}

		.colors {
			@apply flex flex-row gap-4 flex-wrap;

			li {
				@apply flex flex-col gap-4 justify-center items-center mb-4;

				& > .label {
					@apply text-white w-20 text-xs opacity-40 transition-opacity italic relative;

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
					@apply overflow-hidden h-16 w-20 rounded-md bg-red-50 hover:-translate-y-1 transition-transform duration-300 cursor-pointer active:scale-95;
					@apply border border-white border-opacity-10;

					background-color: var(--color);

					&:hover {
						& + .label {
							@apply text-white opacity-100;

							span:first-of-type {
								@apply -translate-y-1 opacity-0;
							}

							span:last-of-type {
								@apply translate-y-0 opacity-100;
							}
						}

						& > .copy {
							@apply opacity-100;
						}

						& > .copy svg {
							@apply scale-100;
						}
					}

					.copy {
						@apply transform-gpu w-full h-full bg-black bg-opacity-10 flex flex-col gap-1 justify-center items-center opacity-0 transition-all duration-300;

						svg {
							@apply scale-95 transition-all duration-300;
						}
					}
				}
			}
		}
	}
</style>
