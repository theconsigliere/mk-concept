<script>
	import ShopifyComponent from '$lib/components/header/states/dashboard/spotifyComponent.svelte';
	import WeatherComponent from '$lib/components/header/states/dashboard/weatherComponent.svelte';
</script>

<div class="DynamicIsland__dashboard-component">
	<ShopifyComponent />
	<WeatherComponent />
</div>

<style lang="scss">
	.DynamicIsland__dashboard-component {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
