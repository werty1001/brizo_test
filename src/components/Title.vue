<template lang="pug">
	component(:is='tag', :class='modifiers').title: slot
</template>

<script>

export default {

	name: 'Title',

	props: {
		tag: {
			type: String,
			default: 'h6'
		},
		size: {
			type: String,
			default: ''
		},
		isUp: {
			type: Boolean,
			default: false
		},
	},

	computed: {

		modifiers() {
			const object = {
				title_up: this.isUp,
			}
			if (this.size) object[`title_size_${this.size}`] = true
			return object
		},

	},

}

</script>

<style lang="stylus">

.title
	display block
	font-size 1em
	font-weight 700
	line-height 1.2
	letter-spacing .02em
	margin 0

	&_up
		text-transform uppercase

	&_size_s
		font-size 14px

	&_size_m
		font-size 18px

		+mq('sm')
			font-size 19px

		+mq('md')
			font-size 20px

	&_size_l
		font-size 20px

		+mq('sm')
			font-size 21px

		+mq('md')
			font-size 22px

		+mq('lg')
			font-size 24px

	&_size_xl
		font-size 22px

		+mq('sm')
			font-size 24px

		+mq('md')
			font-size 26px

		+mq('lg')
			font-size 28px

</style>
