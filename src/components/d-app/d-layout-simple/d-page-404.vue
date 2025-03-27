<template>
	<d-page
		:class="[
			$options.name,
			'flex-center',
			'text-center',
		]"
	>
		<h1
			:class="[
				'q-my-none',
				'text-primary'
			]"
		>
			404
		</h1>
		<p
			:class="[
				'q-mb-xl',
			]"
		>
			{{ $t('Oops. Nothing here…') }}
		</p>
		<p>
			<q-btn
				:label="$t('Go Home')"
				:to="{
					name: 'home',
				}"
				size="lg"
				color="secondary"
				rounded
				unelevated
			></q-btn>
		</p>
	</d-page>
</template>

<style lang="scss" scoped>
.d-page-404 {
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-page-404',

});
</script>
