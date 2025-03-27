const routes = [
	{
		path: '/',
		component: () => import('components/d-app/d-layout-simple.vue'),
		children: [
			{
				name: 'home',
				path: '',
				component: () => import('components/d-app/d-layout-simple/d-page-home.vue'),
			},
		],
	},
	{
		path: '/',
		component: () => import('components/d-app/d-layout-main.vue'),
		children: [
			{
				name: 'guide',
				path: 'guide',
				component: () => import('components/d-app/d-layout-main/d-page-guide.vue'),
			},
			{
				name: 'api',
				path: 'api',
				component: () => import('components/d-app/d-layout-main/d-page-api.vue'),
			},
		],
	},
	{
		path: '/',
		component: () => import('components/d-app/d-layout-simple.vue'),
		children: [
			// Always leave this as last one,
			// but you can also remove it
			{
				name: '404',
				path: '/:catchAll(.*)*',
				component: () => import('components/d-app/d-layout-simple/d-page-404.vue'),
			},
		],
	},
];

export default routes;
