<template>
	<d-page
		:class="[
			$options.name,
		]"
	>
		<article
			:class="[
				`${$options.name}__article`,
				'self-center',
			]"
		>
			<slot></slot>
		</article>
	</d-page>
</template>

<style lang="scss" scoped>
.d-article-page {

	&__article {
		margin: 0 auto;
		max-width: 840px;
		width: 100%;
	}
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-article-page',

});
</script>
