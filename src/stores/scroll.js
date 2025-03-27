import { defineStore } from 'pinia';

export const useScrollStore = (
	defineStore(
		'scroll',
		{

			state() {
				return {

					timeout: 125,

					timeoutId: undefined,

					period: 250,

					inPeriod: false,

					disableScrollBehavior: undefined,

					isAfterScroll: undefined,

					disableScrollEvent: undefined,

				};
			},

			getters: {},

			actions: {

				clearTimeout() {
					clearTimeout(
						this.timeoutId,
					);
				},

				setTimeout(
					fn,
				) {
					this.timeoutId = (
						setTimeout(
							fn,
							this.timeout,
						)
					);
				},

				startPeriod() {
					this.inPeriod = true;
					setTimeout(
						() => {
							this.inPeriod = false;
						},
						this.period,
					);
				},

			},

		},
	)
);
