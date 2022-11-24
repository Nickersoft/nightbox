<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 10, duration: 300 }} out:fly={{ y: -10, duration: 300 }} class="toast">
	<slot />
</div>

<style lang="postcss">
	.toast {
		@apply text-center rounded-md shadow-md bg-white bg-opacity-10 border border-white border-opacity-10 text-sm absolute bottom-4 left-1/2 -translate-x-1/2 px-4 lg:px-8 py-2 text-white;
	}
</style>
