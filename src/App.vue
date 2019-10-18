<template lang="pug">
	.app#app
		include ./assets/symbols.svg
		Notifications(ref='notifications')
		template(v-if='$route.path === "/"')
			router-view
		template(v-else)
			Header
			router-view
			Footer
</template>

<script>

import Notifications from '@/components/Notifications'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {

	name: 'App',
	components: { Notifications, Header, Footer },

	methods: {

		init() {
			const config = this.$axios.defaults
			config.baseURL = 'https://swapi.co/api/'
			this.$axios.interceptors.response.use(
				res => Promise.resolve(res.data),
				err => Promise.reject(err.response.data)
			)
		},

	},

	created() {
		this.init()
	},

	mounted () {
		this.$notice.$on('ADD_NOTIFICATION', notification => this.$refs.notifications.add(notification))
	},

	beforeDestroy () {
		this.$notice.$off('ADD_NOTIFICATION')
	},

}

</script>

<style lang="stylus">

@import '~@/assets/stylus/normalize'
@import '~@/assets/stylus/keyframes'

.app
	position relative
	display block
	width 100%
	min-height 100%
	background-color $c_bg
	font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
	font-size $f_size
	color $c_text
	font-weight $f_weight
	line-height 1

	&__layout
		max-width $layout * 1px
		margin 0 auto
		padding 0 20px

	&__sprite
		abs top left
		width 1px
		height @width
		visibility hidden
		opacity 0

</style>

<style lang="stylus" scoped>

.notifications
	fix top left right
	padding 15px 0
	pointer-events none
	z-index 100

</style>