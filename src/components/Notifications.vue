<template lang="pug">
	.notifications
		.app__layout
			transition-group(name='notifications' tag='div').notifications__items
				.notifications__item(v-for=' item in items ', :key='item.id', :data-type='item.type')
					button(@click='close(item.id)').notifications__cross: Icon(use='cross')
					.notifications__icon
						Icon(:use=' item.type === "error" ? "bad" : "ok" ' width='32' height='32')
					.notifications__description
						Title {{ item.title }}
						Message {{ item.message }}
</template>

<script>

import Icon from '@/components/Icon'
import Title from '@/components/Title'
import Message from '@/components/Text'

export default {

	name: 'Notifications',
	components: { Icon, Title, Message },

	data() {
		return {
			items: [],
			timeouts: {},
		}
	},

	methods: {

		add(notification) {

			const delay = typeof notification.delay === 'number' ? notification.delay : 100
			const hide = typeof notification.hide === 'number' ? notification.hide : false
			const id = Date.now()

			notification.id = id

			this.timeouts[`add_${id}`] = window.setTimeout(() => {
				this.items.unshift(notification)
				delete this.timeouts[`add_${id}`]
			}, delay )

			if (hide) this.timeouts[`hide_${id}`] = window.setTimeout(this.remove, hide, id)
		},

		close(id) {
			if (this.timeouts[`hide_${id}`]) window.clearTimeout(this.timeouts[`hide_${id}`])
			return this.remove(id)
		},

		remove(id) {
			const index = this.items.findIndex(el => el.id === id)
			if (index > -1) this.$delete(this.items, index)
			delete this.timeouts[`hide_${id}`]
		},

	},

	beforeDestroy() {
		Object.values( this.timeouts ).forEach( el => window.clearTimeout( el ) )
	},

}

</script>

<style lang="stylus">

.notifications
	display block

	&__items
		position relative
		max-width 400px

	&__item
		position relative
		display flex
		flex-flow row wrap
		pointer-events auto
		background-color #fff
		color $c_success
		padding 20px 40px 20px 24px
		border-radius 3px
		box-shadow inset 0 0 0 2px @color, 0 10px 20px -5px alpha(@color,25%)
		margin-bottom 15px
		transition all .6s

		&[data-type="error"]
			color $c_error
			box-shadow inset 0 0 0 2px @color, 0 10px 20px -5px alpha(@color,25%)

	&__icon
		flex 0 0 32px
		max-width 32px

	&__description
		flex-grow 1
		flex-basis 0
		max-width 100%
		align-self center
		color $c_text
		word-break break-word

	&__icon ~ &__description
		max-width calc(100% - 32px)
		padding-left 20px

	&__cross
		abs top right
		display block
		padding 0
		border 0
		width 32px
		height @width
		padding 10px
		background none
		color $c_dim
		outline none

		.icon
			width 12px
			height @width
			margin 0 auto

		&:hover
			color $c_text

	&-leave-active
	&-enter-active
		pointer-events none

	&-enter
		opacity 0
		transform translate(0,-20px)

	&-leave-active
		position absolute
		width 100%

	&-leave-to
		opacity 0
		transform translate(-20%,0)

</style>

<style lang="stylus" scoped>

.title
	font-size 18px
	margin-bottom .2em

</style>
