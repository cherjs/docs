<template>
	<d-article-page
		:class="[
			$options.name,
		]"
	>
		<q-markdown
			:src="src"
			:plugins="plugins"
			no-line-numbers
			toc
			@data="updateMenu"
		></q-markdown>
		<div
			:class="[
				`${$options.name}__end`,
				'column',
				'no-wrap',
				'flex-center',
			]"
		>
			<d-logo
				:class="[
					`${$options.name}__end-logo`,
				]"
				:aria-label="$t('Up')"
				width="128"
				height="128"
				@click="(
					$router.push(
						{
							name: $route.name,
						},
					)
				)"
			></d-logo>
		</div>
	</d-article-page>
</template>

<style lang="scss" scoped>
.d-doc-page {

	&__end {

		$-padding: 16px;

		box-sizing: content-box;
		padding-top: $-padding;
		min-height: 128px;
		height: calc(100vh - 51px - #{2 * $-padding}) !important;

		@media (min-width: $above-drawer-breakpoint) {

			$-padding: 24px;

			padding-top: $-padding;
			height: calc(100vh - 51px - #{2 * $-padding}) !important;
		}
	}

	&__end-logo {
		cursor: pointer;
	}
}
</style>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useMenuStore } from 'stores/menu';
import deflist from 'markdown-it-deflist';

export default defineComponent({

	name: 'd-doc-page',

	props: {
		src: String,
	},

	data() {
		return {
			plugins: [
				deflist,
			],
		};
	},

	beforeUnmount() {
		this.updateMenu();
	},

	methods: {

		...mapActions(
			useMenuStore,
			[
				'updateMenu',
			],
		),

	},

});
</script>
