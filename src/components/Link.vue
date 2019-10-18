<template lang="pug">
	component(:is='is', :class='modifiers' v-bind='attributes' v-on='$listeners').link: slot
</template>

<script>

export default {

	name: 'Link',

	props: {
		href: {
			type: String,
			default: ''
		},
		isDim: {
			type: Boolean,
			default: false
		},
	},

	computed: {

		is() {
			if (this.href && !this.isExternal && !this.isAnchor) return 'router-link'
			return 'a'
		},

		isAnchor() {
			return this.href.charAt(0) === '#' || this.href.slice(0, 4) === 'tel:' || this.href.slice(0, 7) === 'mailto:'
		},

		isExternal() {
			return this.href && /^(?:https?:)?\/\//i.test(this.href)
		},

		attributes() {
			const object = {}
			if (this.isExternal) {
				object['target'] = '_blank'
				object['href'] = this.href
			}
			if (this.isAnchor) object['href'] = this.href
			if (this.href && !this.isAnchor) object['to'] = this.href
			return object
		},

		modifiers() {
			const object = {
				link_dim: this.isDim,
			}
			return object
		},

	},

}

</script>

<style lang="stylus">

.link
	color $c_link
	text-decoration none
	border-bottom dotted 1px alpha(@color, 30%)
	transition color .3s, border .3s

	&[href]
		border-bottom-style solid

	&_dim
		color $c_dim
		border-bottom-color alpha(@color, 30%)

	&:hover
		color darken(@color, 20%)
		border-color alpha(@color, 50%)
		border-bottom-style solid

</style>
