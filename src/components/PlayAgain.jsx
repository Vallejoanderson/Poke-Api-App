

import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';


export const PlayAgain = () => {

	const { setHearts, setRound } = useContext( PokemonContext );
	
	return <button
					className="bg-rose-800 text-slate-100 py-3 px-20 rounded-lg mx-auto
										 flex justify-center w-3/4 font-bold tracking-widest w-96" 
					onClick = { () => { setHearts( 3 ); setRound( 1 ) } }
				 >
					PLAY AGAIN
				</button>
};
