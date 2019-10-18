<template lang="pug">
	header.header
		.header__inner.app__layout
			Link(href='/').header__logo
				Icon(use='logo' width='70' height='30')
			nav.header__nav
				Link(href='/persons').header__link Persons
				Link(href='/planets').header__link Planets
				Link(href='/spaceships').header__link Spaceships
</template>

<script>

import Icon from '@/components/Icon'
import Link from '@/components/Link'

export default {

	name: 'Header',
	components: { Icon, Link },

	// methods: {
	// 	logout () {
	// 		this.$store.dispatch( 'logout' )
	// 	}
	// },

}

</script>

<style lang="stylus">

.header
	display block
	font-size 14px
	padding 16px 0
	background-color #fff
	box-shadow 0 0 30px alpha(#000,7%)

	&__inner
		display flex
		flex-flow row wrap
		align-items center

	&__logo
		margin-right 60px
		color inherit
		border 0

	&__nav
		margin-bottom 3px

	&__link
		margin-right 1.5em
		&._active
			color $c_dim
			border-color transparent
			pointer-events none


</style>
