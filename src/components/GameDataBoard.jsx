

import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

export const GameDataBoard = () => {

	const { hearts, round } = useContext( PokemonContext );

	return (
				<div className="flex justify-evenly mt-4 w-96 mx-auto">
					<div>
							<p className="text-slate-100 text-center font-bold">Round</p>
							<p className="bg-purple-800 text-slate-300 inline-block 
														font-bold rounded-full py-2 px-4 shadow-lg
														shadow-rose-400/50">
														{ round }
							</p>
					</div>
					<div>
						<p className="text-slate-100 font-bold text-center"> Lifes </p>
						<div>
							{ 
								hearts > 0 ?
								[ ...Array( hearts ) ].map((e, i ) => 
								(
									<i key={ i } className="animate__animated animate__pulse fas
																fa-heart fa-2x text-red-700 inline-block
																mr-1"></i>
								))
								:
								[ ...Array( 3 ) ].map((e, i ) => 
								(
									<i key={ i } className="animate__animated animate__pulse fas
																fa-heart-broken fa-2x text-red-700 inline-block
																mr-1"></i>
								))
							}
						</div>
					</div>
				</div> 
	)
};
