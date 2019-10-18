
import personAdapter from '@/adapters/PersonAdapter'

const state = {}

const getters = {}

const actions = {

	getPerson (ctx, { id }) {
		return this.$axios.get(`/people/${id}/`)
			.then(person => personAdapter(person))
	},

	getPersons (ctx, { page }) {
		return this.$axios.get(`/people/?page=${page}`)
			.then(({ count, results }) => ({
				total: count,
				persons: results.map(person => personAdapter(person))
			}))
	},

}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations,
}
