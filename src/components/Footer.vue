<template lang="pug">
	footer.footer
		.footer__inner.app__layout
			.footer__copyright © #{new Date().getFullYear()} starwars.com
</template>

<script>

import Link from '@/components/Link'

export default {
	name: 'Footer',
	components: { Link },
}

</script>

<style lang="stylus">

.footer
	display block
	padding 30px 0
	border-top solid 1px alpha($c_border,44%)
	font-size 12px

	&__copyright
		color $c_dim

</style>
