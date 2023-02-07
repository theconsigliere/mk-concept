<script>
	export let data;
	import Logo from '$lib/p5/logo.svelte';
	const document = data.document.data;

	// form prismic
	const page = {
		title: document.title[0].text,
		subtitle: document.subtitle[0].text
	};
</script>

<h1>{page.title}</h1>
<h3>{page.subtitle}</h3>
<Logo />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
