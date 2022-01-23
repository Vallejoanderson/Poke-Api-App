

export const PokemonToGuess = ( { pokemon } ) => {

	const { hiddenPokemon, folded } = pokemon;

	return( <img className={`animate__animated animate__bounceInLeft mb-12 ${ folded && 'hiddenpokemon' }`} src={ hiddenPokemon.img } />)

}