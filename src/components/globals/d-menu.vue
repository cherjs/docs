<template>
	<div
		v-if="menu"
		:class="[
			$options.name,
		]"
	>
		<q-list>
			<q-item
				:to="{
					name: $route.name,
				}"
				@click="clickItem"
			>
				<q-item-section>
					<q-item-label
						header
					>
						{{ title }}
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-expansion-item
				v-for="item in list"
				:key="item.id"
				:model-value="(
					isExpansionItemOpen(
						item,
					)
				)"
				:header-class="[
					'text-h6',
					`${$options.name}__expansion-item`,
					{
						[`${$options.name}__expansion-item--active`]: (
							isItemActive(
								item,
							)
						),
					},
				]"
				:hide-expand-icon="!item.children?.length"
				:to="{
					name: $route.name,
					hash: (
						itemSelector(
							item,
						)
					),
				}"
				:label="item.label"
				@click="(
					clickExpansionItem(
						item,
					)
				)"
			>
				<q-item
					v-for="subitem in (item.children || [])"
					:key="subitem.id"
					:class="[
						`${$options.name}__item`,
						{
							[`${$options.name}__item--active`]: (
								isItemActive(
									subitem,
								)
							),
						},
					]"
					:to="{
						name: $route.name,
						hash: (
							itemSelector(
								subitem,
							)
						),
					}"
					@click="clickItem"
				>
					<q-item-section>
						<q-item-label>
							{{ subitem.label }}
						</q-item-label>
					</q-item-section>
				</q-item>
			</q-expansion-item>
		</q-list>
	</div>
</template>

<style lang="scss" scoped>
.d-menu {

	:deep(#{&}__expansion-item),
	:deep(#{&}__item) {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.q-item__section--side {
			color: inherit;
		}

		.q-expansion-item__toggle-icon {
			opacity: .539;
		}
	}

	:deep(#{&}__expansion-item--active),
	:deep(#{&}__item--active) {
		color: $primary !important;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: 4px;
			background-color: $primary;
		}
	}

	:deep(.q-item.q-router-link--active) {
		color: inherit;
	}
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-menu',

	props: {
		menu: Array,
	},

	data() {
		return {
			openable: true,
			hash: undefined,
		};
	},

	computed: {

		title() {
			return (
				this.menu
				?.[0]
				?.label
			);
		},

		list() {
			return (
				(
					this.menu
					?.[0]
					?.children
				)
				|| []
			);
		},

	},

	methods: {

		itemSelector(
			item,
		) {
			return (
				`#${
					item.id
				}`
			);
		},

		isItemActive(
			item,
		) {
			return (
				this.itemSelector(
					item,
				)
				=== this.$route.hash
			);
		},

		isExpansionItemOpen(
			item,
		) {
			return (
				!!(
					this.openable
					&& (
						this.isItemActive(
							item,
						)
						|| (
							(
								item.children
								|| []
							)
							.some(
								(subitem) => (
									this.isItemActive(
										subitem,
									)
								),
							)
						)
					)
				)
			);
		},

		clickItem() {
			this.openable = true;
			this.hash = undefined;
		},

		clickExpansionItem(
			item,
		) {
			this.openable = (
				this.itemSelector(
					item,
				)
				!== this.hash
			);
			this.hash = (
				this.openable
				? this.itemSelector(
					item,
				)
				: undefined
			);
		},

	},

});
</script>
