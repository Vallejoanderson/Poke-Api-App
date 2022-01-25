import { useEffect } from "react/cjs/react.development";


export const PokemonToGuess = ( { pokemon } ) => {

	const { hiddenPokemon, folded } = pokemon;

	return( <img className={`animate__animated animate__bounceInLeft ${ folded && 'hiddenpokemon' }`} src={ hiddenPokemon.img } />)

}