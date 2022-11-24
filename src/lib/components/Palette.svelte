<script lang="ts">
	import Color from './Color.svelte';

	export let colors: string[];
</script>

<ul class="palette">
	{#each colors as color, idx}
		<Color index={idx} hex={color} on:copied />
	{/each}
</ul>

<style lang="postcss">
	.palette {
		@apply flex flex-row gap-4 overflow-hidden px-8 absolute top-0 left-0 right-0 bottom-0;
	}
</style>
