import { useContext } from "react"
import { PokemonContext } from "./PokemonContext"

export const TableOptionsItem = ( { pokemon } ) => {

	const { hiddenPokemon, setFolded, setRound, played, setPlayed, hearts, setHearts } = useContext( PokemonContext );

	const unFoldPokemon = ( { target } ) => {

		
		setFolded( false );
		if( hiddenPokemon.name == pokemon.name ){
			target.classList.add('bg-lime-600', 'animate__animated', 'animate__heartBeat');
		}
		else{
			target.classList.add('bg-rose-900', 'animate__animated', 'animate__headShake');
			setHearts( hearts => hearts - 1 );
			let chs = [ ...target.parentNode.children ];
			for( let i = 0, j = chs.length; i < j; i++ ){
				if( chs[i].innerHTML == hiddenPokemon.name )
					chs[i].classList.add('bg-lime-600', 'animate__animated', 'animate__flash')
			}
		}
		setTimeout( () => {
			
			setFolded( true );
			setPlayed( true );
			if( hearts > 0 ){
				setRound( round => round + 1 )
			}
			
		}, 1000)
	}

	return( 
		<p
			className={`bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 
				hover:text-slate-50 cursor-pointer text-center uppercase text-slate-300
				font-bold rounded-lg py-2 mb-3 w-96 tracking-widest hover:skew-y-1 mx-auto
				${ played  && 'cursor-not-allowed' } ${ hearts < 1 && 'pointer-events-none'}`} 
				
			onClick={ ( e ) => { unFoldPokemon( e ) } }
		>
				{ pokemon.name }
		</p>)
}