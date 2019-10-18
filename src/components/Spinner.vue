<template lang="pug">
	.spinner
</template>

<script>
export default {
	name: 'Spinner',
}
</script>

<style lang="stylus">

.spinner
	display block
	width 20px
	height @width
	border solid 2px alpha($c_dim,30%)
	border-top-color currentColor
	border-radius 50%
	animation rotate 1.2s infinite linear

@keyframes rotate
	0%
		transform rotate(0deg)
	100%
		transform rotate(360deg)

</style>
