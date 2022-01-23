import { useContext } from "react"
import { PokemonContext } from "./PokemonContext"

export const TableOptionsItem = ( { pokemon } ) => {

	const { hiddenPokemon, setFolded, win, setWin } = useContext( PokemonContext );

	const unFoldPokemon = ( { target } ) => {

		setFolded( folded => false );
		if( hiddenPokemon.id === pokemon.id ){
			target.classList.add('bg-green-400', 'animate__animated', 'animate__heartBeat');
		}
		else{
			target.classList.add('bg-rose-700', 'animate__animated', 'animate__headShake');
		}
	}

	return( 
		<p
			className={`bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 
				hover:bg-purple-600 hover:text-slate-50 cursor-pointer text-center
				uppercase text-slate-300 font-bold rounded-lg py-2 my-3 tracking-widest
				hover:skew-y-1`}
			onClick={ ( e ) => {
				unFoldPokemon( e )
			} }
		>
				{ pokemon.name }
		</p> )
}