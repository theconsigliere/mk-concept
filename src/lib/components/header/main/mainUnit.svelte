<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import dynamicIslandStore from '../../../../store.js';

	// states
	import Dashboard from '$lib/components/header/states/dashboard/dashboard.svelte';
	import Navigate from '$lib/components/header/states/navigate/navigate.svelte';

	import HelloComponent from '$lib/components/header/components/helloComponent.svelte';
	import SquareButton from '$lib/components/header/buttons/squareButton.svelte';

	onMount(() => {
		gsap.set(['.DynamicIsland__dashboard-top', '.DynamicIsland__dashboard-bottom'], {
			autoAlpha: 0
		});
		gsap.set('.DynamicIsland__grill--piece', { xPercent: -100 });

		const introAnim = gsap.timeline({
			delay: 0.5,
			defaults: {
				ease: 'expo.inOut'
			}
		});

		introAnim
			.to('.DynamicIsland__grill--piece', {
				duration: 1.5,
				stagger: 0.35,
				xPercent: 0
			})
			.to(
				['.DynamicIsland__dashboard-top', '.DynamicIsland__dashboard-bottom'],
				{
					autoAlpha: 1,
					stagger: 0
				},
				0
			);
	});
</script>

<div class="DynamicIsland__section-unit">
	<div class="DynamicIsland__dashboard">
		<div class="DynamicIsland__dashboard-top">
			<HelloComponent />
			<SquareButton title={$dynamicIslandStore.dashboardTitle} />
		</div>

		<div class="DynamicIsland__grill">
			<div class="DynamicIsland__grill--piece" />
			<div class="DynamicIsland__grill--piece" />
			<div class="DynamicIsland__grill--piece" />
			<div class="DynamicIsland__grill--piece" />
		</div>

		<div class="DynamicIsland__dashboard-bottom">
			<!-- in svelte if store value changes write if statment to show correct component -->
			{#if $dynamicIslandStore.state === 'Navigate'}
				<Navigate />
			{:else if $dynamicIslandStore.state === 'Dashboard' || $dynamicIslandStore.state === 'Contact'}
				<Dashboard />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.DynamicIsland__section-unit {
		flex: 1;
		padding: 0.5rem;
	}

	.DynamicIsland__grill {
		width: 100%;
		margin: 1rem 0;
		overflow: hidden;

		&--piece {
			width: 100%;
			height: 0.125rem;
			background: var(--color-dark-grey);
			margin-bottom: 0.25rem;
		}
	}

	.DynamicIsland__dashboard-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex: 0 0 40%;
	}

	.DynamicIsland__dashboard {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.DynamicIsland__dashboard-bottom {
	}
</style>
