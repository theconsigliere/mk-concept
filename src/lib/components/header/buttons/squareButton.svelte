<script>
	// 1. allow user to select title
	export let title = 'Default title';
	// 2. allow user to select link that updates store of change of state
	// 3. svg animation

	function handleClick() {
		console.log('clicked');
	}
</script>

<button class="btn--square" on:click={handleClick}>
	<div class="button__title white p--small">{title}</div>
	<div class="button__svg">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10.554"
			height="10.553"
			viewBox="0 0 10.554 10.553"
			><path
				d="M0-1191.153,8.846-1200h-4.9v-1h6.107v.5h.5v6.107h-1v-4.9l-8.847,8.847Z"
				transform="translate(0 1201)"
				fill="#fffcf2"
			/></svg
		>
	</div>
</button>

<style lang="scss">
	.button__svg {
		border: 0.2rem solid var(--color-white);
		aspect-ratio: 1/1;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.4s ease-in-out;

		svg {
			width: 60%;
			height: 60%;

			path {
				transition: fill 0.4s ease-in-out;
			}
		}

		&:hover {
			background: var(--color-white);
			svg path {
				fill: var(--color-black);
			}
		}
	}

	.button__title {
		margin-right: 0.5rem;
	}

	.btn--square {
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
	}
</style>
