<template lang="pug">
	svg(v-if='use').icon: use(:xlink:href=' "#" + use ')
	i(v-else).icon: slot
</template>

<script>

export default {

	name: 'Icon',

	props: {
		use: {
			type: String,
			default: ''
		}
	},

}

</script>

<style lang="stylus">

.icon
	display block
	fill currentColor

</style>
