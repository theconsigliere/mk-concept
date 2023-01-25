<script>
	export let data;
	const document = data.document.data;

	// from prismic
	const page = {
		images: {}
	};

	// map over the work group and add the images to the page object
	document.my_work_group.map((item, i) => {
		const { url, dimensions, alt } = item.work_image;

		page.images[i] = {
			url,
			dimensions,
			alt
		};
	});
</script>

<main>
	<div class="Work__grid">
		<!-- iterate over object in svelte -->
		{#each Object.keys(page.images) as key, index}
			<div class="Work__image Work__image--{index}">
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
		//visibility: hidden;
	}

	.Work__image {
		position: absolute;
		background: var(--color-real-white);

		img {
			object-fit: cover;
			height: 100%;
			width: auto;
		}

		&--0 {
			height: 40rem;
			width: 70rem;
		}

		&--1 {
			height: 50rem;
			left: 85rem;
			top: 30rem;
			width: 40rem;
		}

		&--2 {
			height: 50rem;
			left: 15rem;
			top: 60rem;
			width: 60rem;
		}

		&--3 {
			height: 30rem;
			right: 0;
			top: 10rem;
			width: 50rem;
		}

		&--4 {
			height: 60rem;
			right: 15rem;
			top: 55rem;
			width: 40rem;
		}

		&--5 {
			height: 75rem;
			left: 5rem;
			top: 120rem;
			width: 57.5rem;
		}

		&--6 {
			height: 70rem;
			right: 0;
			top: 130rem;
			width: 50rem;
		}

		&--7 {
			height: 50rem;
			left: 85rem;
			top: 95rem;
			width: 40rem;
		}

		&--8 {
			height: 65rem;
			left: 75rem;
			top: 155rem;
			width: 50rem;
		}

		&--9 {
			height: 43rem;
			right: 0;
			top: 215rem;
			width: 30rem;
		}

		&--10 {
			height: 50rem;
			left: 70rem;
			top: 235rem;
			width: 80rem;
		}

		&--11 {
			left: 0;
			top: 210rem;
			height: 70rem;
			width: 50rem;
		}
	}

	.demo-1__gallery__image {
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>
