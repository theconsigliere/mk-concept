<script>
	import Logo from '$lib/images/svgs/logo.svelte';

	console.log(Logo);
</script>

<header class="DynamicIsland">
	<div class="DynamicIsland__logo">
		<Logo />
	</div>

	<div class="DynamicIsland__nav">
		<nav>
			<a prefetch href="/">Home</a>
			<a prefetch href="/blog">Work</a>
			<a prefetch href="/contact">Contact</a>
		</nav>
	</div>
</header>

<style lang="scss">
	.DynamicIsland {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		background: var(--color-black);
		display: flex;
	}
</style>
