<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 10, duration: 300 }} out:fly={{ y: -10, duration: 300 }} class="toast">
	<slot />
</div>

<style lang="postcss">
	.toast {
		@apply text-center backdrop-blur-sm rounded-md bg-white bg-opacity-20 border z-50 border-white border-opacity-10 text-sm fixed bottom-4 left-1/2 -translate-x-1/2 px-4 lg:px-8 py-2 text-white;
	}
</style>
