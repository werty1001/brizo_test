<template lang="pug">
	.pagination
		.pagination__items(v-if='items && items.length > 0')
			router-link(v-for='item in items', :key='item'
				:to=' href + ( item > 1 ? "?page=" + item : "" ) '
				@click.native='scrollTop').pagination__item {{ item }}
</template>

<script>

export default {

	name: 'Pagination',

	props: {
		active: {
			type: Number,
		},
		total: {
			type: Number,
			default: 1
		},
		limit: {
			type: Number,
			default: 10
		},
		path: {
			type: String,
			default: ''
		},
	},

	computed: {

		items() {

			if ( this.limit > this.total ) return false

			const active = parseInt( this.active || this.$route.query.page || 1 )
			const num = Math.ceil( this.total / this.limit )
			const items = []

			if ( num > 6 ) {

				items.push( 1 )

				if ( active <= 3 ) {

					items.push( 2, 3, 4 )

				} else if ( active + 2 >= num ) {

					items.push( num - 3, num - 2, num - 1 )

				} else {

					items.push( active - 1, active, active + 1 )
				}

				items.push( num )

			} else {

				for ( let i = 0; i < num; i++ ) {
					items.push( i + 1 )
				}

			}

			return items
		},

		href() {
			return this.path ? this.path : this.$route.path
		},

	},

	methods: {
		scrollTop() {

			if ('scrollBehavior' in document.documentElement.style) return window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})

			window.scrollTo(0,0)
		}
	},

}

</script>

<style lang="stylus">

.pagination

	&__items
		display flex
		flex-flow row wrap
		align-items center
		justify-content center

	&__item
		display block
		width 40px
		height @width
		line-height @height
		font-size 14px
		color $c_text
		text-decoration none
		text-align center
		background-color #fff
		box-shadow 0 3px 10px alpha(#000,8%)
		border-radius 3px
		transition color .25s
		margin 5px

		&:hover
			color $c_bright

		&._active_exact
			font-weight 700
			color $c_bright
			transform translate(0,3px)
			box-shadow inset 0 0 0 2px @color, 0 3px 10px alpha(@color,15%)
			pointer-events none

</style>
