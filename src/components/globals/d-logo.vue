<!-- eslint-disable max-len -->
<template>
	<svg
		:class="[
			$options.name,
		]"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 8 8"
	>
		<path
			fill="#b01020"
			d="M4 0a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-.28125-1.4726562C6.9075827 3.7162602 5.5431432 4.5 4 4.5a.50005.50005 0 110-1c1.3895996 0 2.5747479-.8084668 3.140625-1.9765625A4 4 0 004 0z"
		/>
	</svg>
</template>

<style lang="scss" scoped>
.d-logo {
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-logo',

});
</script>
