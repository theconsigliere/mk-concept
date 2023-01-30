<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import dynamicIslandStore from '../../../store.js';
	import { updateDynamicIslandByClick } from '../../../store.js';
	import Logo from '$lib/images/svgs/logo.svelte';

	let showSection = true;

	// states
	import MainUnit from './main/mainUnit.svelte';

	const island = {
		el: null,
		loadingWrapper: null,
		loadlines: []
	};

	//console.log(dynamicIslandStore);
	// if hovering over logo, update logo component
	let isHovering = false;

	function hoverEnter() {
		isHovering = true;
	}

	function hoverLeave() {
		isHovering = false;
	}

	// Loading State
	// when changing state of the dynamic island set a loading state
	// this will trigger a loading animation
	// when the loading animation is complete, change the state of the dynamic island

	const loadingTimeline = gsap.timeline({
		defaults: {
			duration: 0.35,
			ease: 'sine.inOut',
			stagger: {
				each: 0.1,
				repeat: -1,
				yoyo: true
			}
		},
		delay: 0.5,
		paused: true
	});

	// do this by adding a css class to the dynamic island
	// when the css class is added, trigger a gsap animation
	// when the gsap animation is complete, remove the css class

	// Subscribe to the store to get the current value
	function handleClick(value) {
		island.el.classList.add('js-loading');
		showSection = !showSection;

		// play timeline
		const chunkSize = 20;
		for (let i = 0; i < island.loadlines.length; i += chunkSize) {
			const chunk = island.loadlines.slice(i, i + chunkSize);
			loadingTimeline.fromTo(chunk, { scaleY: 0.01 }, { scaleY: 1 }, 0);
		}

		loadingTimeline.play(true);

		// Loading
		setTimeout(() => {
			island.el.classList.remove('js-loading');
			updateDynamicIslandByClick(value);
			showSection = true;
		}, 1500);
	}

	// animate in gsap
	onMount(() => {
		// create loading spans
		for (let i = 0; i < 60; i++) {
			const span = document.createElement('span');
			span.classList.add('DynamicIsland__loading--line');
			island.loadlines.push(span);
			island.loadingWrapper.appendChild(span);
		}
	});
</script>

<header class="DynamicIsland" bind:this={island.el}>
	<div class="DynamicIsland__loading">
		<div class="DynamicIsland__loading-background">
			<div class="DynamicIsland__loading-background--line" />
			<div class="DynamicIsland__loading-background--line" />
			<div class="DynamicIsland__loading-background--line" />
			<div class="DynamicIsland__loading-background--line" />
			<div class="DynamicIsland__loading-background--line" />
			<div class="DynamicIsland__loading-background--line" />
		</div>
		<div class="DynamicIsland__loading-inner" bind:this={island.loadingWrapper} />
	</div>

	<div class="DynamicIsland__inner">
		<div
			class="DI__speaker-unit DI__speaker-unit--logo"
			on:mouseenter={hoverEnter}
			on:mouseleave={hoverLeave}
		>
			<Logo bind:isHovering />
			<div class="DI__speaker-border" />
		</div>

		{#if showSection}
			<MainUnit />
		{/if}

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
		width: 60%;
		border-radius: 50rem;
		height: 15rem;
		overflow: hidden;
		transition: width 0.75s cubic-bezier(0.41, 0.21, 0.42, 0.97);

		&:global(.js-loading) {
			width: 30%;

			.DynamicIsland__loading {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	:global(.DynamicIsland__loading-background) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		width: 75%;
		height: 50%;
		position: absolute;
	}

	:global(.DynamicIsland__loading-background--line) {
		width: 100%;
		height: 0.125rem;
		background: var(--color-dark-grey);
	}

	:global(.DynamicIsland__loading) {
		position: absolute;
		transition: all 0.1s ease-in-out;
		background: var(--color-black);
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: flex;
		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
	}

	:global(.DynamicIsland__loading-inner) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 75%;
		height: 50%;
	}

	:global(.DynamicIsland__loading--line) {
		width: 0.125rem;
		height: 100%;
		background: var(--color-white);
		transform: scaleY(0.01);
		transform-origin: bottom;
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
</style>
