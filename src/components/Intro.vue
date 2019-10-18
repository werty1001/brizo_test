<template lang="pug">
	.intro
		picture.intro__backdrop
			source(srcset='@/assets/backdrops/intro.webp' type='image/webp')
			source(srcset='@/assets/backdrops/intro.jpg')
			img(src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' alt='')
		.app__layout
			.intro__content
				Icon(use='logo' width='186' height='80').intro__logo
				nav.intro__nav
					Link(href='/persons').intro__link Persons
					Link(href='/planets').intro__link Planets
					Link(href='/spaceships').intro__link Spaceships
</template>

<script>

import Link from '@/components/Link'
import Icon from '@/components/Icon'

export default {
	name: 'Intro',
	components: { Link, Icon },
}

</script>

<style lang="stylus">

.intro
	position relative
	padding 10vh 0
	height 100vh

	&__content
		position relative
		display flex
		flex-flow row wrap
		align-items center
		color #fff
		z-index 1

	&__nav
		display flex
		flex-flow row wrap
		margin-left auto

	&__link
		display block
		font-size 18px
		font-weight 700
		letter-spacing 0.03em
		text-transform uppercase
		color inherit
		padding 1.5em 2.8em
		border 0
		background alpha(#3a323a,80%)
		margin-left 3px
		transition color .2s, background .2s
		&:hover
			background-color #3a323a
			color #fff

	&__backdrop
		display block
		abs top left right bottom
		background-color $c_dark
		z-index 0

		img
			display block
			width 100%
			height @width
			object-fit cover
			object-position center

</style>
