<script>
	import ShopifyComponent from '$lib/components/header/states/dashboard/spotifyComponent.svelte';
	import WeatherComponent from '$lib/components/header/states/dashboard/weatherComponent.svelte';
</script>

<div class="DI_Dashboard__bottom">
	<ShopifyComponent />
	<WeatherComponent />
</div>

<style lang="scss">
	.DI_Dashboard__bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
