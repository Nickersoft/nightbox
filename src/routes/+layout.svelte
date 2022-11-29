<script>
	import alexandria from '@fontsource/alexandria/files/alexandria-latin-variable-wghtOnly-normal.woff2';
	import inter from '@fontsource/inter/files/inter-latin-variable-wghtOnly-normal.woff2';

	import '@fontsource/alexandria/variable.css';
	import '@fontsource/inter/variable.css';

	import '../app.postcss';
</script>

<svelte:head>
	<link rel="preload" as="font" href={alexandria} type="font/woff2" />
	<link rel="preload" as="font" href={inter} type="font/woff2" />

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6QL59M91E6"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-6QL59M91E6');
	</script>
</svelte:head>

<slot />
