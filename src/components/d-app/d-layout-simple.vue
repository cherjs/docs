<template>
	<q-layout
		view="hHh lpR fFf"
		:class="[
			$options.name,
		]"
	>
		<d-header></d-header>
		<q-page-container>
			<router-view></router-view>
		</q-page-container>
	</q-layout>
</template>

<style lang="scss" scoped>
.d-layout-simple {
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

	name: 'd-layout-simple',

});
</script>
