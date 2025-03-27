<template>
	<q-header
		:class="[
			$options.name,
			{
				[`${$options.name}--dark`]: $q.dark.isActive,
			},
		]"
		bordered
	>
		<q-toolbar
			:class="[
				'q-px-sm',
			]"
		>
			<q-btn
				v-if="leftMenuButton"
				:class="[
					`${$options.name}__left-menu-button`,
				]"
				:aria-label="$t('Left menu')"
				icon="menu"
				dense
				flat
				round
				@click="$emit(
					'update:left-menu',
					!leftMenu,
				)"
			></q-btn>
			<q-toolbar-title
				:class="[
					'self-stretch',
					'row',
					'items-stretch',
					'q-px-none',
				]"
			>
				<q-btn
					:to="{
						name: 'home',
					}"
					:aria-label="$t('Home')"
					size="xl"
					padding="none sm"
					no-wrap
					no-caps
					flat
				>
					<q-avatar
						:class="[
							'q-mr-sm',
						]"
					>
						<d-logo></d-logo>
					</q-avatar>
					<span>Cher</span>
				</q-btn>
			</q-toolbar-title>
			<q-tabs
				:class="[
					'self-stretch',
				]"
				indicator-color="primary"
			>
				<q-route-tab
					:class="[
						'q-px-sm',
					]"
					:to="{
						name: 'guide',
					}"
					:label="$t('Guide')"
				></q-route-tab>
				<q-route-tab
					:class="[
						'q-px-sm',
					]"
					:to="{
						name: 'api',
					}"
					:label="$t('API')"
				></q-route-tab>
			</q-tabs>
			<q-toggle
				:model-value="$q.dark.isActive"
				@update:model-value="$q.dark.toggle()"
				:aria-label="$t('Dark mode')"
				unchecked-icon="sunny"
				checked-icon="dark_mode"
			></q-toggle>
			<q-btn
				:class="[
					`${$options.name}__gitlab-button`,
				]"
				:icon="icons.mdiGitlab"
				href="https://gitlab.com/cherjs/cher"
				target="_blank"
				flat
				round
			></q-btn>
			<q-btn
				:class="[
					`${$options.name}__github-button`,
				]"
				:icon="icons.mdiGithub"
				href="https://github.com/cherjs/cher"
				target="_blank"
				flat
				round
			></q-btn>
			<q-btn
				v-if="rightMenuButton"
				:class="[
					`${$options.name}__right-menu-button`,
				]"
				:aria-label="$t('Right menu')"
				icon="menu"
				dense
				flat
				round
				@click="$emit(
					'update:right-menu',
					!rightMenu,
				)"
			></q-btn>
		</q-toolbar>
	</q-header>
</template>

<style lang="scss" scoped>
.d-header {

	background-color: white;
	color: black;

	&--dark {
		background-color: $dark;
		color: white;
	}

	&__left-menu-button,
	&__right-menu-button {

		@media (min-width: $above-drawer-breakpoint) {
			display: none;
		}
	}

	&__left-menu-button {
		order: 1;
	}

	&__github-button,
	&__gitlab-button {
		display: none;
	}

	&__github-button {

		@media (min-width: $header-breakpoint-1) {
			display: inline-flex;
		}
	}

	&__gitlab-button {

		@media (min-width: $header-breakpoint-2) {
			display: inline-flex;
		}
	}

	:deep(.q-tab__content) {
		min-width: 0;

		@media (min-width: 360px) {
			min-width: 32px;
		}

		@media (min-width: $breakpoint-sm-min) {
			min-width: 64px;
		}

		@media (min-width: $breakpoint-md-min) {
			min-width: 96px;
		}

		@media (min-width: $above-drawer-breakpoint) {
			min-width: 128px;
		}
	}
}
</style>

<script>
import { defineComponent } from 'vue';
import {
	mdiGitlab,
	mdiGithub,
} from '@quasar/extras/mdi-v6';

export default defineComponent({

	name: 'd-header',

	props: {
		'left-menu': Boolean,
		'right-menu': Boolean,
		'left-menu-button': Boolean,
		'right-menu-button': Boolean,
	},

	emits: [
		'update:left-menu',
		'update:right-menu',
	],

	data() {
		return {
			icons: {
				mdiGitlab,
				mdiGithub,
			},
		};
	},

});
</script>
