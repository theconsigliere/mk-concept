import Lenis from '@studio-freight/lenis';

export const Scroll = () => {
	const lenis = new Lenis({
		smooth: true,
		infinite: true
	});

	const raf = (time) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
	};

	requestAnimationFrame(raf);
};
