<template lang="pug">
	Content
		template(#side)
			Sidebar
				Description From the moment the Jedi Order was first conceived, the Star Wars galaxy has rarely been an underpopulated universe. You can't move for Gungans, Corellians, Twi'leks, Imperial badmen, bounty hunters, droids and whatever the hell Admiral Ackbar is. Yet everyone's sure about which of those denizens is their favourite. Sure, the Han fans outnumber the Luke-lovers, and the Fett-followers think they're way cooler than the Vader ravers, but even the likes of Wicket the ewok have their yay-sayers.
		template(#default)
			.persons(:class='{persons_loading: isLoading}')
				.persons__spinner(v-if='isLoading'): Spinner
				Title(size='xl').persons__title Persons
				template(v-if='persons && persons.length > 0')
					Person(
						v-for='person in persons'
						:key='person.id'
						:person='person'
					).persons__item
				Pagination(v-if='total', :total='total').persons__pagination
</template>

<script>

import Spinner from '@/components/Spinner'
import Content from '@/components/Content'
import Person from '@/components/Person'
import Pagination from '@/components/Pagination'
import Title from '@/components/Title'
import Description from '@/components/Text'
import Sidebar from '@/components/Sidebar'

export default {

	name: 'PersonsPage',
	components: { Spinner, Content, Person, Pagination, Title, Description, Sidebar },

	data () {
		return {
			total: 0,
			persons: [],
			isLoading: true,
		}
	},

	methods: {

		getPersons() {
			this.isLoading = true;
			this.$store.dispatch('getPersons', {
				page: this.$route.query.page || '1',
			})
				.then(({ persons, total }) => {
					this.persons = persons
					this.total = total
				})
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

	watch: {
		$route() {
			this.getPersons()
		},
	},

	created() {
		this.getPersons()
	},

}
</script>

<style lang="stylus" scoped>

.persons
	position relative

	&__spinner
		abs top 9px left 50%
		transform translate(-50%, 0)

	&__title
		margin-bottom .7em

	&__item
		position relative
		animation fadeIn .5s ease 0s 1 normal both
		margin-top 10px
		z-index 1

		&:first-child
			margin-top 0
	
		~/_loading &
			animation none
			pointer-events none
			opacity .44

	&__pagination
		margin-top 30px

.sidebar
	position sticky
	top 15px

</style>
