
import getID from '@/utils/get_id_from_url'

export default (el) => {

	const person = {
		id: getID(el.url),
		name: el.name || '',
		height: parseInt(el.height) || 0,
		mass: parseInt(el.mass) || 0,
		hairColor: el.hair_color,
		skinColor: el.skin_color,
		eyeColor: el.eye_color,
		birthYear: el.birth_year,
		gender: el.gender,
		homeworld: getID(el.homeworld),
		films: Array.isArray(el.films) ? el.films.map(getID) : [],
		species: Array.isArray(el.species) ? el.species.map(getID) : [],
		vehicles: Array.isArray(el.vehicles) ? el.vehicles.map(getID) : [],
		starships: Array.isArray(el.starships) ? el.starships.map(getID) : [],
		created: el.created,
		edited: el.edited,
		url: el.url,
	}

	return person
}
