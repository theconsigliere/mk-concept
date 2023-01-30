//Store.js
import { writable } from 'svelte/store';

const dynamicIslandStore = writable([
	{
		state: '',
		dashboardTitle: '',
		speakerUnit: ''
	}
]);

export default dynamicIslandStore;

// state needs to be changed by both page route and by the button click

export async function updateDynamicIslandByRoute(route) {
	switch (route) {
		case '/':
			dynamicIslandStore.set({
				state: 'Dashboard',
				dashboardTitle: 'Navigate',
				speakerUnit: 'Contact'
			});
			break;
		case '/contact':
			dynamicIslandStore.set({
				state: 'Contact',
				dashboardTitle: 'Dasboard',
				speakerUnit: 'Navigate'
			});
			break;
		default:
			dynamicIslandStore.set({
				state: 'Navigate',
				dashboardTitle: 'Dashboard',
				speakerUnit: 'Contact'
			});
	}
}

// on click update dynamic island state

export async function updateDynamicIslandByClick(state) {
	switch (state) {
		case 'Dashboard':
			dynamicIslandStore.update((s) => {
				return {
					...s,
					state: state,
					dashboardTitle: 'Navigate',
					speakerUnit: 'Contact'
				};
			});
			break;
		case 'Contact':
			dynamicIslandStore.update((s) => {
				return {
					...s,
					state: state,
					dashboardTitle: 'Dashboard',
					speakerUnit: 'Navigate'
				};
			});
			break;
		case 'Navigate':
			dynamicIslandStore.update((s) => {
				return {
					...s,
					state: state,
					dashboardTitle: 'Dashboard',
					speakerUnit: 'Contact'
				};
			});
			break;
	}
}
