<template>
	<q-drawer
		:class="[
			$options.name,
		]"
		:breakpoint="breakpoint"
		show-if-above
		bordered
	><template
		v-for="(_, slot) in $slots"
		v-slot:[slot]="scope"
	><slot
		:name="slot"
		v-bind="scope || {}"
	></slot></template></q-drawer>
</template>

<style lang="scss" scoped>
.d-drawer {
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-drawer',

	data() {
		return {
			// must be equal to
			// 	- the value specified in the quasar.variables.scss
			// 	- the value specified in the src/router/index.js
			breakpoint: 1280,
		};
	},

});
</script>
