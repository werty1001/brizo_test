<template lang="pug">

	.person(:class='modifiers')

		.person__header(@click='showInfo')
			.person__name(:data-id='person.id') {{ person.name }}
			.person__born Born: {{ person.birthYear }}
			.person__films
				Icon(use='film' width='16' height='16').person__icon
				| {{ person.films.length }}
			.person__gender {{ person.gender }}

		.person__content(v-if='isOpen')
			.person__mask(:class='{ person__mask_active: isLoading }'): Spinner
			.person__row
				.person__col
					Title.person__title Features:
					ul.person__list
						li.person__list-item(v-for='(feature, i) in features', :key='i')
							span {{ feature.key }}:
							| {{ feature.value }}
				.person__col
					Title.person__title Films:
					ul.person__list(v-if='films.length > 0')
						li.person__list-item(v-for='(film, i) in films', :key='i') {{ film.title }}
					div(v-else) Not found :(

</template>

<script>

import Spinner from '@/components/Spinner'
import Icon from '@/components/Icon'
import Title from '@/components/Title'

export default {

	name: 'Person',
	components: { Spinner, Title, Icon },

	props: {
		person: {
			type: Object,
			required: true,
		}
	},

	data () {
		return {
			isOpen: false,
			isLoading: true,
			films: [],
		}
	},

	computed: {

		modifiers() {
			const object = {
				person_active: this.isOpen,
			}
			if (this.person.gender) object[`person_${this.person.gender}`] = true
			return object
		},

		features() {
			return [
				{ key: 'Height', value: `${this.person.height} cm` },
				{ key: 'Mass', value: `${this.person.mass} kg` },
				{ key: 'Hair color', value: this.person.hairColor },
				{ key: 'Skin color', value: this.person.skinColor },
				{ key: 'Eye color', value: this.person.eyeColor },
			]
		},

	},

	methods: {

		showInfo() {
			this.isOpen = !this.isOpen
			this.getPersonFilms();
		},

		getPersonFilms() {
			if (this.films.length > 0) return;
			this.isLoading = true
			const promises = this.person.films.map(id => this.$store.dispatch('getFilm', { id }))
			Promise.all(promises)
				.then(films => ( this.films = films ))
				.catch(this.showError)
				.finally(() => (this.isLoading = false))
		},

		showError(err) {
			this.$notice.$emit('ADD_NOTIFICATION', {
				type: 'error',
				title: `Ошибка № ${err.status}`,
				message: err.message,
				hide: 10000
			})
		},

	},

}

</script>

<style lang="stylus">

.person
	display block
	background-color #fff
	box-shadow 0 3px 10px alpha(#000,5%)
	border-radius 3px

	&_active
		box-shadow 0 3px 15px alpha($c_link,25%), inset 0 0 0 2px $c_link

	&__header
		display flex
		flex-flow row wrap
		align-items center
		padding 15px 22px
		cursor pointer

	&__name
		position relative
		flex-grow 1
		flex-basis 0
		max-width calc(100% - 350px)
		display flex
		flex-flow row wrap
		align-items center
		
		&:before
			content '#' attr(data-id)
			font-size 12px
			color $c_link
			width 3em
		
		~/_active &
			color $c_link
			font-weight 700

		&:after
			content ''
			abs top bottom right
			width 1px
			border-right solid 1px alpha($c_border,50%)
			margin 1px 28px 1px 0

	&__born
		flex 0 0 140px
		max-width 140px
		font-size 12px
		letter-spacing .01em

	&__films
		flex 0 0 90px
		max-width 90px
		font-size 12px
		color $c_dim
		margin-top 3px

	&__icon
		display inline-block
		vertical-align middle
		margin -2px .5em 0 0
		fill #aaa

	&__gender
		flex 0 0 120px
		max-width 120px
		font-size 12px
		letter-spacing .02em
		color $c_dim
		margin-top 2px

		&:before
			content ''
			display inline-block
			vertical-align middle
			width 8px
			height @width
			background-color $c_dark
			border-radius 50%
			margin-right .7em
			margin-top -2px

			~/_female &
				background-color #ef41c1

			~/_male &
				background-color #4197ef

	&__content
		position relative
		padding 22px 22px 32px 22px
		border-top solid 1px $c_border
		margin 0 2px
		
	&__mask
		abs top left right bottom
		margin 2px
		display flex
		flex-flow row wrap
		align-items center
		background-color #fff
		visibility hidden
		opacity 0
		transition opacity .4s, visibility .4s
		z-index 30
		&_active
			visibility visible
			opacity 1
		.spinner
			margin 0 auto

	&__row
		display flex
		flex-flow row wrap

	&__col
		flex-grow 1
		flex-basis 0
		max-width 100%

	&__title
		margin-bottom .7em

	&__list
		list-style none
		margin 0
		padding 0

		&-item
			font-size 14px
			margin-top .6em
			&:first-child
				margin-top 0
			span
				display inline-block
				width 80px
				color $c_dim

</style>
