import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import {
	Quasar,
	// Cookies,
} from 'quasar';
// // all i18n locale files
// import messages from 'src/i18n';

function logError(
	place,
	message,
) {
	// DEBUG:
	if (process.env.DEBUGGING) {
		console.error(
			(`Error (${place}):`),
			message,
		);
	}
}

export default defineBoot(
	async (
		{
			app,
		},
	) => {

		// from quasar.conf.js
		const fallbackLocale = (
			// // not working
			// Quasar.lang.isoName ||

			// // not working in build
			// Quasar.lang.props?.isoName ||

			// // not yet live in build when boot function is called
			// Quasar.lang.__qLang?.isoName ||

			// working :)
			'en-US'
		);

		const locales = {
			'en-US': 1,
			// hu: 1,
			// ...
		};

		let locale = (
			// Cookies.get('locale') ||
			Quasar.lang.getLocale()
		);

		if (locale && !(locale in locales)) {
			locale = locale.split('-')[0];
		}

		if (!locale || !(locale in locales)) {
			locale = fallbackLocale;
		}

		const requests = [
			// Quasar locale lang file
			import(
				`../../node_modules/quasar/lang/${
					locale
				}.js`
			),
			// I18n locale messages file
			import(
				`../i18n/${
					locale
				}/index.js`
			),
		];

		if (fallbackLocale !== locale) {
			requests.push(
				// I18n fallback locale messages file
				import(
					`../i18n/${
						fallbackLocale
					}/index.js`
				),
			);
		}

		await (
			Promise.allSettled(
				requests,
			)
			.then(
				(responses) => {
					if (responses[0].status === 'fulfilled') {
						// Set Quasar language pack
						Quasar.lang.set(
							responses[0].value.default,
						);
					}
					else {
						logError(
							'get Quasar locale file in boot/i18n',
							responses[0].reason,
						);
					}

					// Set Vue I18n

					const messages = {};

					if (responses[1].status === 'fulfilled') {
						messages[locale] = responses[1].value.default;
					}
					else {
						logError(
							'get i18n locale file in boot/i18n',
							responses[1].reason,
						);
					}

					if (responses.length > 2) {
						if (responses[2].status === 'fulfilled') {
							messages[fallbackLocale] = responses[2].value.default;
						}
						else {
							logError(
								'get i18n fallback locale file in boot/i18n',
								responses[2].reason,
							);
						}
					}

					const i18n = createI18n({
						locale,
						fallbackLocale,
						messages,
					});

					// Set i18n instance on app
					app.use(
						i18n,
					);
				},
			)
		);

		// this will allow you to use this.$tf() in any component instance
		// the this.$tf() wrapper method improves and complements
		// the operation of the this.$t() method
		app.config.globalProperties.$tf = function $tf(
			key,
			...args
		) {
			if (
				!(
					key
					|| key === 0
					// || key === 0n
				)
			) {
				return undefined;
			}
			if (typeof key === 'function') {
				return key(
					this,
					...args,
				);
			}
			return this.$t(
				String(key),
				...args,
			);
		};

	},
);
