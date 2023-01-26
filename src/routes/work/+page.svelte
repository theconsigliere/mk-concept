<script>
	//import imagesLoaded from 'imagesloaded';
	import { onMount } from 'svelte';
	export let data;
	let holder;
	let items = [];

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

	// infintie scroll

	// repeat first six items by cloning them and appending them to the .grid
	const repeatItems = (parent, items) => {
		for (let i = 0; i <= items.length - 1; ++i) {
			let cln = items[i].cloneNode(true);
			console.log(cln);
			parent.appendChild(cln);
		}
	};

	onMount(() => {
		repeatItems(holder, page.DOM.gridItems);
	});

	// for loop to add the correct class to each item
</script>

<main>
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
	.Work__grid {
		height: 295rem;
		position: relative;
		z-index: -1;
		width: 100%;
		overflow-x: hidden;
		//visibility: hidden;
	}

	.Work__image {
		position: absolute;
		background: var(--color-real-white);

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}

		&--0 {
			height: 55rem;
			width: 50rem;
		}

		&--1 {
			height: 50rem;
			left: 65rem;
			top: 10rem;
			width: 40rem;
		}

		&--2 {
			height: 50rem;
			left: 5rem;
			top: 60rem;
			width: 50rem;
		}

		&--3 {
			height: 20rem;
			right: 0rem;
			top: 61rem;
			width: 15rem;
		}

		&--4 {
			height: 30rem;
			right: 20rem;
			top: 75rem;
			width: 40rem;
		}

		&--5 {
			height: 75rem;
			left: 5rem;
			top: 120rem;
			width: 57.5rem;
		}

		&--6 {
			height: 60rem;
			right: 0;
			top: 160rem;
			width: 50rem;
		}

		&--7 {
			height: 45rem;
			left: 85rem;
			top: 115rem;
			width: 40rem;
		}

		&--8 {
			height: 65rem;
			left: 5rem;
			top: 225rem;
			width: 50rem;
		}

		&--9 {
			height: 43rem;
			right: 0;
			top: 245rem;
			width: 30rem;
		}
	}
</style>
