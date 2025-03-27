<template>
	<d-page
		:class="[
			$options.name,
			'flex-center',
			'text-center',
		]"
	>
		<d-logo
			width="256"
			height="256"
		></d-logo>
		<h1
			:class="[
				'q-mb-none',
				'q-mt-lg',
			]"
		>
			Cher
		</h1>
		<q-markdown
			:class="[
				`${$options.name}__description`,
				'q-mb-md',
			]"
		>
[Cher](https://github.com/cherjs/cher) is a configurable fetcher based on the native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
		</q-markdown>
		<p>
			<q-btn
				:class="[
					'q-ma-sm',
				]"
				:to="{
					name: 'guide',
				}"
				:label="$t('Get started')"
				size="lg"
				color="secondary"
				rounded
				unelevated
			></q-btn>
			<q-btn
				:class="[
					'q-ma-sm',
				]"
				:to="{
					name: 'api',
				}"
				:label="$t('Go to API')"
				size="lg"
				color="secondary"
				rounded
				outline
				unelevated
			></q-btn>
		</p>
	</d-page>
</template>

<style lang="scss" scoped>
.d-page-home {

	h1 {
		font-size: 8rem;
		font-weight: 500;
		letter-spacing: normal;
		line-height: normal;
	}
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-page-home',

});
</script>
