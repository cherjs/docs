import { defineRouter } from '#q-app/wrappers';
import {
	createRouter,
	createMemoryHistory,
	createWebHistory,
	createWebHashHistory,
} from 'vue-router';
import routes from './routes';
import { useScrollStore } from '../stores/scroll';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(
	function (/* { store, ssrContext } */) {
		const createHistory = (
			process.env.SERVER
			? createMemoryHistory
			: (
				process.env.VUE_ROUTER_MODE === 'history'
				? createWebHistory
				: createWebHashHistory
			)
		);

		const Router = createRouter(
			{
				scrollBehavior(
					to,
					// from,
					// savedPosition,
				) {
					const scrollStore = useScrollStore();

					if (scrollStore.disableScrollBehavior) {
						if (scrollStore.isAfterScroll) {
							scrollStore.disableScrollBehavior = undefined;
							scrollStore.isAfterScroll = undefined;
						}
						return undefined;
					}

					scrollStore.clearTimeout();

					scrollStore.disableScrollEvent = true;
					scrollStore.setTimeout(
						() => {
							scrollStore.disableScrollEvent = undefined;
						},
					);

					// if (savedPosition) {
					// 	return savedPosition;
					// }

					if (to.hash) {
						return {
							el: to.hash,
							top: (
								51
								+ (
									(
										(
											window
											?.innerWidth
										)
										// must be equal to
										// 	- the value specified in the quasar.variables.scss
										// 	- the value specified in the d-drawer global component
										> 1280
									)
									// must be equal to the value specified in the d-page global component
									? 24
									// must be equal to the value specified in the d-page global component
									: 16
								)
							),
							behavior: 'smooth',
						};
					}

					return {
						top: 0,
						left: 0,
						behavior: 'smooth',
					};
				},

				routes,

				// Leave this as is and make changes in quasar.conf.js instead!
				// quasar.conf.js -> build -> vueRouterMode
				// quasar.conf.js -> build -> publicPath
				history: createHistory(process.env.VUE_ROUTER_BASE),
			},
		);

		return Router;
	},
);
