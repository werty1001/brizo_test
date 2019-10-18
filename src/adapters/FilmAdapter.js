
import getID from '@/utils/get_id_from_url'

export default (el) => {

	const film = {
		title: el.title,
		episodeId: el.episode_id,
		openingCrawl: el.opening_crawl,
		director: el.director,
		producer: el.producer,
		releaseDate: el.release_date,
		characters: Array.isArray(el.characters) ? el.characters.map(getID) : [],
		planets: Array.isArray(el.planets) ? el.planets.map(getID) : [],
		starships: Array.isArray(el.starships) ? el.starships.map(getID) : [],
		vehicles: Array.isArray(el.vehicles) ? el.vehicles.map(getID) : [],
		species: Array.isArray(el.species) ? el.species.map(getID) : [],
		created: el.created,
		edited: el.edited,
		url: el.url,
	}

	return film
}
