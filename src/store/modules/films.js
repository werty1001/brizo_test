
import filmAdapter from '@/adapters/FilmAdapter'

const state = {}

const getters = {}

const actions = {

	getFilm (ctx, { id }) {
		return this.$axios.get(`/films/${id}/`)
			.then(film => filmAdapter(film))
	},

	getFilms (ctx, { page }) {
		return this.$axios.get(`/films/?page=${page}`)
			.then(({ count, results }) => ({
				total: count,
				films: results.map(film => filmAdapter(film))
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
