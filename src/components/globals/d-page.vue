<template>
	<q-page
		:class="[
			$options.name,
			'column',
			'no-wrap',
		]"
		padding
	><template
		v-for="(_, slot) in $slots"
		v-slot:[slot]="scope"
	><slot
		:name="slot"
		v-bind="scope || {}"
	></slot></template></q-page>
</template>

<style lang="scss" scoped>
.d-page {
	padding: 16px;

	@media (min-width: $above-drawer-breakpoint) {
		padding: 24px;
	}
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-page',

});
</script>
