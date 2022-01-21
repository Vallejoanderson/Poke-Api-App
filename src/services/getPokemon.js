

export const getPokemon = async() => {

	const randomNumber = Math.floor(Math.random() * (200 - 1 + 1) + 1);
	const url = `https://pokeapi.co/api/v2/pokemon/${ randomNumber }/`;
  const resp = await fetch( url );
  const data = await resp.json();

	const { name, id, sprites: { other: { ['official-artwork']: { front_default:img } } } } = data;

	return({

		id,
		name,
		img,

	});

}