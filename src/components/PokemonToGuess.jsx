

export const PokemonToGuess = ( { pokemon } ) => {

	const { hiddenPokemon, folded } = pokemon;

	console.log( hiddenPokemon, folded );
	return( <img className={`animate__animated animate__bounceInLeft mb-12 ${ folded && 'hiddenpokemon' }`} src={ hiddenPokemon.img } />)

}