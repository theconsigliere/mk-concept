<script>
	export let isHovering;

	// dynamic island passes down a class to the logo when hovered to trigger the animation 'ignition'
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="173.588"
	height="235"
	viewBox="0 0 173.588 235"
	class="Logo {isHovering ? 'js-active' : ''}"
>
	<g id="mklogo-01" transform="translate(-13.8 -10.696)">
		<path
			id="Fill-4"
			d="M100.66,127.985c9.841-12.334,19.55-24.536,29.391-36.869-2.493,16.007,3.543,27.029,18.369,33.2-3.674,4.592-7.216,9.053-10.89,13.646-7.479,9.447-15.22,18.763-22.437,28.341-7.61,10.234-22.174,9.447-29.522-.656-9.447-12.99-19.944-25.323-30.047-37.919a95.906,95.906,0,0,0-6.823-8v95.257c0,10.89-8.266,18.5-19.025,17.844C21.148,232.3,13.8,224.686,13.8,216.157V68.286c0-6.954,4.855-13.383,11.678-15.745a17.367,17.367,0,0,1,19.288,5.38C54.212,69.6,63.528,81.407,72.844,93.215c8.791,11.021,17.582,22.174,26.5,33.2a11.817,11.817,0,0,0,1.312,1.574"
			transform="translate(0 12.743)"
			fill="#fffcf2"
			fill-rule="evenodd"
		/>
		<path
			id="Fill-6"
			d="M112.6,74.079c4.592-5.642,8.791-11.021,13.121-16.4a16.487,16.487,0,0,1,9.053-5.642,17.46,17.46,0,0,1,21.781,16.795V215.784a17.458,17.458,0,0,1-34.9.394c-.131-5.9,0-11.94,0-17.844V124.988c10.89.918,19.944-2.624,26.242-11.678a25.566,25.566,0,0,0,4.067-21.256C148.813,77.228,131.1,65.288,112.6,74.079"
			transform="translate(30.833 12.723)"
			fill="#fffcf2"
			fill-rule="evenodd"
		/>
		<path
			id="Path_1"
			data-name="Path 1"
			d="M60.873,56.493h-.787a22.1,22.1,0,0,1-15.614-7.216A22.028,22.028,0,0,1,38.3,33.269h0C38.7,20.542,49.064,10.439,61.529,10.7A22.858,22.858,0,0,1,77.8,17.918,22.427,22.427,0,0,1,83.965,34.45,22.747,22.747,0,0,1,60.873,56.493ZM44.734,33.531A15.633,15.633,0,0,0,49.2,44.815a16.072,16.072,0,0,0,11.021,5.117A16.375,16.375,0,0,0,77.4,34.187a16.666,16.666,0,0,0-4.33-11.809A16.833,16.833,0,0,0,61.4,17.262c-9.053-.262-16.27,6.954-16.663,16.27Z"
			transform="translate(7.641)"
			fill="#fffcf2"
		/>
		<path
			id="Fill-10"
			d="M143.97,91.251A17.385,17.385,0,1,1,126.651,73.8,17.36,17.36,0,0,1,143.97,91.251"
			transform="translate(29.772 19.693)"
			fill="#fffcf2"
			fill-rule="evenodd"
		/>
	</g>
</svg>

<style lang="scss">
	.Logo {
		&.js-active {
			animation: ignition 1.75s;
			animation-fill-mode: forwards;

			path {
				animation: brighten 1.75s;
				animation-fill-mode: forwards;
			}
		}
	}

	@keyframes ignition {
		from {
			opacity: 1;
		}
		0% {
			opacity: 1;
		}
		8% {
			opacity: 0.5;
		}
		16% {
			opacity: 1;
		}
		24% {
			opacity: 0.25;
		}
		32% {
			opacity: 1;
		}
		40% {
			opacity: 0.5;
		}
		48% {
			opacity: 1;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes brighten {
		0% {
			fill: var(--color-white);
		}

		95% {
			fill: var(--color-white);
		}

		100% {
			fill: var(--color-real-white);
		}
	}
</style>
