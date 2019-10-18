<template lang="pug">
	main.content
		.content__inner.app__layout
			.content__side(v-if='$slots.side'): slot(name='side')
			.content__main: slot
</template>

<script>

export default {
	name: 'Content',
}

</script>

<style lang="stylus">

.content
	display block
	padding 35px 0 60px 0
	min-height 80vh
	
	&__inner
		display flex
		flex-flow row wrap

	&__main
		flex-grow 1
		flex-basis 0
		max-width 100%

	&__side
		flex 0 0 320px
		max-width 320px
		padding-right 40px

		& ~ ^[0]__main
			max-width calc(100% - 320px)

</style>
