<template lang="pug">
	.sidebar: slot
</template>

<script>
export default {
	name: 'Sidebar',
}
</script>

<style lang="stylus">

.sidebar
	display block
	background-color #fff
	padding 1.2em 1.5em
	font-size 14px
	box-shadow 0 3px 10px rgba(0,0,0,.06)
	border-radius 3px

</style>
