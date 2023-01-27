<script>
	//import imagesLoaded from 'imagesloaded';
	import { onMount } from 'svelte';
	export let data;
	let holder;
	let items = [];
	let main;

	const page = {
		DOM: {
			gridItems: items
		},
		images: {}
	};

	// prisimic
	const document = data.document.data;

	// map over the work group and add the images to the page object
	document.my_work_group.map((item, i) => {
		const { url, dimensions, alt } = item.work_image;

		page.images[i] = {
			url,
			dimensions,
			alt
		};
	});

	// repeat first six items by cloning them and appending them to the .grid
	// const repeatItems = (parent, items) => {
	// 	for (let i = 0; i <= items.length - 1; ++i) {
	// 		let cln = items[i].cloneNode(true);
	// 		parent.appendChild(cln);
	// 	}
	// };

	const repeatItems = (parent, clonee) => {
		let cln = clonee.cloneNode(true);
		cln.classList.add('js-cloned');
		parent.appendChild(cln);
	};

	onMount(() => {
		repeatItems(main, holder);
	});

	// for loop to add the correct class to each item
</script>

<main bind:this={main}>
	<div class="Work__grid" bind:this={holder}>
		<!-- iterate over object in svelte -->
		{#each Object.keys(page.images) as key, index}
			<div class="Work__image Work__image--{index}" bind:this={items[index]}>
				<img
					src={page.images[key].url}
					alt={page.images[key].alt}
					width={page.images[key].dimensions.width}
					height={page.images[key].dimensions.height}
				/>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	.js-cloned {
		//height: 100vh;
		overflow: hidden;
	}

	.Work__grid {
		//	height: 100vh;
		position: relative;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(10rem, 20vh);
		z-index: -1;
		width: 100%;
		overflow-x: hidden;
		grid-gap: 10px;
		margin-bottom: 10rem;
		//visibility: hidden;
	}

	.Work__image {
		//background: var(--color-real-white);

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}

		&--0 {
			grid-column: 1 / span 6;
			grid-row: 1 / span 3;
			// 	height: 55rem;
			// 	width: 50rem;
		}

		&--1 {
			// height: 50rem;
			// left: 65rem;
			// top: 10rem;
			// width: 40rem;
			grid-column: 11 / span 2;
			grid-row: 1 / span 1;
		}

		&--2 {
			// 	height: 50rem;
			// 	left: 5rem;
			// 	top: 60rem;
			// 	width: 50rem;
			grid-row: 3 / span 2;
			grid-column: 8 / span 4;
		}

		&--3 {
			// 	height: 20rem;
			// 	right: 0rem;
			// 	top: 61rem;
			// 	width: 15rem;
			grid-row: 5 / span 4;
			grid-column: 2 / span 5;
		}

		&--4 {
			// 	height: 30rem;
			// 	right: 20rem;
			// 	top: 75rem;
			// 	width: 40rem;
			grid-row: 6 / span 2;
			grid-column: 8 / span 3;
		}

		&--5 {
			// 	height: 75rem;
			// 	left: 5rem;
			// 	top: 120rem;
			// 	width: 57.5rem;
			grid-row: 9 / span 2;
			grid-column: 9 / span 6;
		}

		&--6 {
			// 	height: 60rem;
			// 	right: 0;
			// 	top: 160rem;
			// 	width: 50rem;
			grid-row: 11 / span 4;
			grid-column: 1 / span 6;
		}

		&--7 {
			// 	height: 45rem;
			// 	left: 85rem;
			// 	top: 115rem;
			// 	width: 40rem;
			grid-row: 12 / span 3;
			grid-column: 8 / span 4;
		}

		&--8 {
			// 	height: 65rem;
			// 	left: 5rem;
			// 	top: 225rem;
			// 	width: 50rem;
			grid-row: 16 / span 2;
			grid-column: 1 / span 2;
		}

		&--9 {
			// 	height: 43rem;
			// 	right: 0;
			// 	top: 245rem;
			// 	width: 30rem;
			grid-row: 16 / span 4;
			grid-column: 6 / span 7;
		}
	}
</style>
