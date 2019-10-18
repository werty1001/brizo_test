
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "home" */ '@/pages/Home.vue' )
const Persons = () => import( /* webpackChunkName: "persons" */ '@/pages/Persons.vue' )
const Planets = () => import( /* webpackChunkName: "planets" */ '@/pages/Planets.vue' )
const Spaceships = () => import( /* webpackChunkName: "spaceships" */ '@/pages/Spaceships.vue' )

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: '_active',
	linkExactActiveClass: '_active_exact',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/persons',
			name: 'persons',
			component: Persons,
		},
		{
			path: '/planets',
			name: 'planets',
			component: Planets,
		},
		{
			path: '/spaceships',
			name: 'spaceships',
			component: Spaceships,
		},
	],
})

export default router