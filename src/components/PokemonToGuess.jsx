

export const PokemonToGuess = ( { pokemon } ) => {

	const { img } = pokemon;
	return( <img className="hiddenpokemon mb-12" src={ img } />)

}