<template>
	<d-doc-page
		:class="[
			$options.name,
		]"
		:src="content"
	></d-doc-page>
</template>

<style lang="scss" scoped>
.d-page-guide {
}
</style>

<script>
import { defineComponent } from 'vue';
import content from 'contents/guide.md';

export default defineComponent({

	name: 'd-page-guide',

	data() {
		return {
			content,
		};
	},

});
</script>
