<script>
	import Logo from '$lib/images/svgs/logo.svelte';
	import Dashboard from '$lib/components/header/states/dashboard/dashboard.svelte';

	let isHovering = false;

	function hoverEnter() {
		isHovering = true;
	}

	function hoverLeave() {
		isHovering = false;
	}
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
			<Dashboard />
		</div>
		<div class="DI__speaker-unit">
			<div class="DI__speaker-border" />
			<p class="white DI__speaker-text">Contact</p>
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
	}
</style>
