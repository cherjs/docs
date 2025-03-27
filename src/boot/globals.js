import { defineBoot } from '#q-app/wrappers';
// global components
import globals from 'components/globals';

export default defineBoot(
	({
		app,
	}) => {
		Object
		.entries(
			globals,
		)
		.forEach(
			(
				[
					name,
					component,
				],
			) => {
				app.component(
					name,
					component,
				);
			},
		);

		Object.defineProperty(
			app.config.globalProperties,
			'$globals',
			{
				get() {
					return (
						app._context
						?.components
					);
				},
			},
		);
		// // or function
		// app.config.globalProperties.$globals = function $globals() {
		// 	return (
		// 		this
		// 		?.$
		// 		?.appContext
		// 		?.components
		// 	);
		// };
	},
);
