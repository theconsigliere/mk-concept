<script>
	import '../styles/app.scss';
	import DynamicIsland from '$lib/components/header/dynamicIsland.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<DynamicIsland />
<slot />
<Footer />
