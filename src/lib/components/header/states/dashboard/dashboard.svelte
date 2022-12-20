<script>
	import ShopifyComponent from '$lib/components/header/states/dashboard/spotifyComponent.svelte';
	import HelloComponent from '$lib/components/header/states/dashboard/helloComponent.svelte';
	import WeatherComponent from '$lib/components/header/states/dashboard/weatherComponent.svelte';
	import SquareButton from '$lib/components/buttons/squareButton.svelte';
</script>

<div class="DI_dashboard">
	<div class="DI_Dashboard__top">
		<HelloComponent />
		<SquareButton title={'Navigate'} />
	</div>
	<div class="DynamicIsland__grill">
		<div class="DynamicIsland__grill--piece" />
		<div class="DynamicIsland__grill--piece" />
		<div class="DynamicIsland__grill--piece" />
		<div class="DynamicIsland__grill--piece" />
	</div>

	<div class="DI_Dashboard__bottom">
		<ShopifyComponent />
		<WeatherComponent />
	</div>
</div>

<style lang="scss">
	.DynamicIsland__grill {
		width: 100%;
		margin: 1rem 0;

		&--piece {
			width: 100%;
			height: 0.125rem;
			background: var(--color-dark-grey);
			margin-bottom: 0.25rem;
		}
	}

	.DI_Dashboard__bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.DI_Dashboard__top {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex: 0 0 40%;
	}

	.DI_dashboard {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
