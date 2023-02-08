<script>
	export let data;
	import Logo from '$lib/p5/logo.svelte';
	const document = data.document.data;

	// from prismic
	const page = {
		title: document.title[0].text,
		subtitle: document.subtitle[0].text,
		awards_title: document.awards_title[0].text,
		image: {
			url: document.image.url,
			alt: document.image.alt,
			disclaimer: document.image_disclaimer[0].text
		},
		employment_history: document.employment_history.map((item) => {
			return {
				title: item.employment_title[0].text,
				desc: item.employment_job_description[0].text,
				link: item.employment_link.url
			};
		}),
		awards_list: document.awards_list.map((item) => {
			return {
				title: item.awards_excerpt[0].text
			};
		})
	};
</script>

<section class="Home">
	<div class="Home__grid">
		<div class="Home__image-section">
			<div class="Home__image"><img src={page.image.url} alt={page.image.alt} /></div>
			<p class="Home__image-disclaimer">{page.image.disclaimer}</p>
		</div>

		<!-- split a string in svelte -->
		{#each page.title.split(' ') as word, i}
			<div class="Home__section--{i}">
				<h1 class="Home__title big-h1">{word}</h1>
				<!-- if statment if i === 1-->
				{#if i === 1}
					<svg viewBox="0 0 671.01 163.52" preserveAspectRatio="none">
						<path
							fill="none"
							stroke="var(--color-dark-grey)"
							stroke-width="0.1rem"
							d="m671.01,163.52V0H0v114.52l75.44,49h595.57Z"
						/>
					</svg>
				{/if}
				<div class="Home__grid-box" />
			</div>
		{/each}

		<div class="Home__section--2">
			<h2 class="Home__subtitle">{page.subtitle}</h2>
			<div class="Home__grid-box" />
		</div>

		<div class="Home__section--3">
			<div class="Home__awards">
				<h5 class="Home__awards-title uppercase">{page.awards_title}</h5>
				<ul class="Home__awards-list">
					{#each page.awards_list as award}
						<li class="Home__awards-excerpt">{award.title}</li>
					{/each}
				</ul>
			</div>

			<div class="Home__careers">
				<svg viewBox="0 0 401.56 163.52" preserveAspectRatio="none">
					<path
						fill="none"
						stroke="var(--color-dark-grey)"
						stroke-width="0.1rem"
						d="m0,163.52V0h401.56v114.52l-73.27,49H0Z"
					/>
				</svg>
				<div class="Home__careers-inner">
					{#each page.employment_history as career}
						<a href={career.link} class="Home__careers-link">
							<h5 class="Home__careers-title uppercase">{career.title}</h5>
							<p class="Home__careers-desc uppercase">{career.desc}</p>
						</a>
					{/each}
				</div>
				<div class="Home__grid-box" />
			</div>
		</div>
	</div>
</section>

<!-- < Logo /> -->
<style lang="scss">
	@import '../styles/base/variables.scss';

	.Home {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.Home__grid {
		padding: 1rem;
		display: grid;
		height: 100vh;
		grid-template-columns: repeat(11, 1fr) 5rem;
		grid-template-rows: 2.5rem repeat(5, 1fr);
		gap: 0px 5px;
		grid-template-areas:
			'image-area image-area image-area image-area . . . . . . . .'
			'image-area image-area image-area image-area . first-section first-section first-section first-section first-section first-section .'
			'image-area image-area image-area image-area . second-section second-section second-section second-section second-section second-section .'
			'image-area image-area image-area image-area . . third-section third-section third-section third-section third-section .'
			'image-area image-area image-area image-area fourth-section fourth-section fourth-section fourth-section fourth-section fourth-section fourth-section .'
			'image-area image-area image-area image-area . . . . . . . .';
	}

	.Home__grid-box {
		width: 5rem;
		border-left: 0.1rem solid var(--color-dark-grey);
		height: 100%;
	}

	.Home__section--0 {
		grid-area: first-section;
		border: 0.1rem solid var(--color-dark-grey);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		border-bottom: none;
	}

	.Home__section--1 {
		grid-area: second-section;
		//	border: 0.01rem solid var(--color-dark-grey);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		svg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			path {
				width: 100%;
			}
		}
	}

	.Home__section--2 {
		grid-area: third-section;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.Home__grid-box {
			border-right: 0.1rem solid var(--color-dark-grey);
		}
	}

	.Home__section--3 {
		grid-area: fourth-section;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.Home__title {
		font-family: var(--font-cursive);
		font-weight: var(--font-thin);
		margin: 0;
		line-height: 0.8;
		overflow: hidden;
		margin-right: 1rem;
	}

	.Home__subtitle {
		max-width: 45rem;
		margin: 2.5rem 3.5rem 2.5rem 0;
		line-height: 1.25;

		@media (min-width: #{$screen-xxl}) {
			margin: 2.5rem 6.25rem 2.5rem 0;
		}
	}

	.Home__image-section {
		grid-area: image-area;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.Home__image {
		min-height: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.Home__image-disclaimer {
		margin: 2rem;
		max-width: 15rem;
	}

	.Home__careers {
		position: relative;
		width: 55%;
		display: flex;

		svg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			path {
				width: 100%;
			}
		}

		.Home__grid-box {
			height: auto;
			flex: 0 0 calc(0% + 5rem);
			border: none;
			position: relative;

			&:after {
				content: '';
				display: block;
				width: 0.1rem;
				height: 87.5%;
				position: absolute;
				top: 0;
				left: 0;
				background: var(--color-dark-grey);
			}
		}
	}

	.Home__careers-inner {
		padding: 2rem;
		height: 100%;
		flex: 0 0 calc(100% - 5rem);
	}

	.Home__careers-link {
		display: flex;
		margin-bottom: 1.5rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.Home__awards {
		width: 45%;
	}

	.Home__careers-title {
		flex: 0 0 40%;
	}

	.Home__careers-desc {
		flex: 0 0 60%;
	}

	.Home__awards-excerpt {
		text-transform: uppercase;
		letter-spacing: 1px;
	}
</style>
