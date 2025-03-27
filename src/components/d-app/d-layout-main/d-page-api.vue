<template>
	<d-doc-page
		:class="[
			$options.name,
		]"
		:src="content"
	></d-doc-page>
</template>

<style lang="scss" scoped>
.d-page-api {
}
</style>

<script>
import { defineComponent } from 'vue';
import content from 'contents/api.md';

export default defineComponent({

	name: 'd-page-api',

	data() {
		return {
			content,
		};
	},

});
</script>
