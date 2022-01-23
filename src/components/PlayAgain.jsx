

import React from 'react';


export const PlayAgain = ( { setRound } ) => {

	console.log( setRound );
	
	return <button
					className="bg-rose-800 text-slate-100 py-3 px-20 rounded-lg mx-auto
										 flex justify-center w-3/4 font-bold tracking-widest"
					onClick = { () => {
						setRound( round => round + 1  );
					} }
				 >
					PLAY AGAIN
				</button>
};
