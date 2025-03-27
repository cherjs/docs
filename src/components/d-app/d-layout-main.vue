<template>
	<q-layout
		:class="[
			$options.name,
		]"
		view="hHh LpR fFf"
		@scroll="scroll"
	>
		<d-header
			v-model:left-menu="leftMenu"
			left-menu-button
		></d-header>
		<d-drawer
			v-model="leftMenu"
			side="left"
		>
			<q-scroll-area
				:class="[
					'fit',
				]"
			>
				<d-menu
					:menu="menu"
				></d-menu>
			</q-scroll-area>
		</d-drawer>
		<d-drawer
			side="right"
			:bordered="false"
		></d-drawer>
		<q-page-container>
			<router-view></router-view>
		</q-page-container>
	</q-layout>
</template>

<style lang="scss" scoped>
.d-layout-main {
}
</style>

<script>
import { defineComponent } from 'vue';
import {
	mapState,
	mapWritableState,
	mapActions,
} from 'pinia';
import { useMenuStore } from 'stores/menu';
import { useScrollStore } from 'stores/scroll';

export default defineComponent({

	name: 'd-layout-main',

	data() {
		return {
			leftMenu: false,
		};
	},

	computed: {

		...mapState(
			useMenuStore,
			[
				'menu',
			],
		),

		...mapState(
			useScrollStore,
			[
				'inPeriod',
			],
		),

		...mapWritableState(
			useScrollStore,
			[
				'disableScrollBehavior',
				'isAfterScroll',
				'disableScrollEvent',
			],
		),

	},

	methods: {

		...mapActions(
			useScrollStore,
			[
				'clearTimeout',
				'setTimeout',
				'startPeriod',
			],
		),

		getHeadings(
			startLevel = 1,
			endLevel = 3,
		) {
			return (
				[
					...document.querySelectorAll(
						(
							[
								'.q-markdown--heading-h1',
								'.q-markdown--heading-h2',
								'.q-markdown--heading-h3',
								'.q-markdown--heading-h4',
								'.q-markdown--heading-h5',
								'.q-markdown--heading-h6',
							]
							.slice(
								(startLevel - 1),
								endLevel,
							)
							.join()
						),
					),
				]
			);
		},

		setActiveHash(
			isAfterScroll,
		) {
			let hash;
			const { scrollY } = window;
			const headings = this.getHeadings();

			for (let i = 1; i < headings.length; ++i) {
				if (scrollY < headings[i].offsetTop) {
					break;
				}
				hash = `#${headings[i].id}`;
			}

			if (
				(
					isAfterScroll
					&& this.disableScrollBehavior
				)
				|| (
					(
						hash
						|| this.$route.hash
					)
					&& hash !== this.$route.hash
				)
			) {
				this.$router[
					this.disableScrollBehavior
					? 'replace'
					: 'push'
				](
					{
						name: this.$route.name,
						hash,
					},
				);
				this.isAfterScroll = (
					isAfterScroll
					? true
					: undefined
				);
				this.disableScrollBehavior = true;
			}
		},

		scroll() {
			this.clearTimeout();

			if (this.disableScrollEvent) {
				this.setTimeout(
					() => {
						this.disableScrollEvent = undefined;
					},
				);
				return;
			}

			if (!this.inPeriod) {
				this.startPeriod();
				this.setActiveHash();
			}
			this.setTimeout(
				() => {
					this.setActiveHash(
						true,
					);
				},
			);
		},

	},

});
</script>
