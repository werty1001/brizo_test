<template lang="pug">
	.text: slot
</template>

<script>

export default {
	name: 'TheText',
}

</script>

<style lang="stylus">

.text
	display block
	margin 0
	padding 0
	font-size 1em
	line-height typeof( $f_height ) == 'unit' ? $f_height : 1.6
	letter-spacing .01em

</style>
