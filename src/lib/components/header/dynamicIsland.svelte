<script>
	import { onMount } from 'svelte';
	import Logo from '$lib/images/svgs/logo.svelte';
	import Dashboard from '$lib/components/header/states/dashboard/dashboard.svelte';
	import HelloComponent from '$lib/components/header/components/helloComponent.svelte';
	import SquareButton from '$lib/components/header/buttons/squareButton.svelte';
	import { gsap } from 'gsap';
	import dynamicIslandStore from '../../../store.js';
	import { updateDynamicIslandByClick } from '../../../store.js';

	//console.log(dynamicIslandStore);
	// if hovering over logo, update logo component
	let isHovering = false;

	function hoverEnter() {
		isHovering = true;
	}

	function hoverLeave() {
		isHovering = false;
	}

	// Subscribe to the store to get the current value
	function handleClick(value) {
		console.log(value);
		updateDynamicIslandByClick(value);
	}

	// animate in gsap
	onMount(() => {
		gsap.set('.DynamicIsland__grill--piece', { xPercent: -100 });

		gsap.to('.DynamicIsland__grill--piece', {
			duration: 3,
			stagger: 0.5,
			xPercent: 0,
			ease: 'expo.inOut'
		});
	});
</script>

<header class="DynamicIsland">
	<div class="DynamicIsland__inner">
		<div
			class="DI__speaker-unit DI__speaker-unit--logo"
			on:mouseenter={hoverEnter}
			on:mouseleave={hoverLeave}
		>
			<Logo bind:isHovering />
			<div class="DI__speaker-border" />
		</div>
		<div class="DI__section-unit">
			<div class="DI_dashboard">
				<div class="DI_Dashboard__top">
					<HelloComponent />
					<SquareButton title={$dynamicIslandStore.dashboardTitle} />
				</div>
				<div class="DynamicIsland__grill">
					<div class="DynamicIsland__grill--piece" />
					<div class="DynamicIsland__grill--piece" />
					<div class="DynamicIsland__grill--piece" />
					<div class="DynamicIsland__grill--piece" />
				</div>

				<Dashboard />
			</div>
		</div>
		<div class="DI__speaker-unit">
			<div class="DI__speaker-border" />
			<button
				on:click={handleClick($dynamicIslandStore.speakerUnit)}
				class="white DI__speaker-text"
			>
				{$dynamicIslandStore.speakerUnit}</button
			>
		</div>
	</div>
</header>

<style lang="scss">
	.DynamicIsland {
		position: fixed;
		bottom: 1rem;
		left: 50%;
		transform: translate(-50%, 0);
		background: var(--color-black);
		min-width: 60%;
		border-radius: 50rem;
		height: 15rem;
	}

	.DynamicIsland__inner {
		display: flex;
		justify-content: space-between;
		height: 100%;
		width: 100%;
		padding: 0.25rem;
	}

	.DI__speaker-unit {
		border-radius: 100%;
		position: relative;
		flex: 0 10% 25%;
		aspect-ratio: 1/1;

		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			.DI__speaker-border {
				transform: translate(-50%, -50%) rotate(360deg);
			}
		}
	}

	.DI__speaker-border {
		border-radius: 100%;
		width: 90%;
		height: 90%;
		border: 1px dashed var(--color-white);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.6s ease-in-out;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.DI__section-unit {
		flex: 1;
		padding: 0.5rem;
	}

	.DI__speaker-unit :global(svg) {
		width: 50%;
		height: 50%;
	}
	.DI__speaker-text {
		margin-bottom: 0;
		background: transparent;
		border: none;
		cursor: pointer;
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
