
import PokeLogo from '../resources/poke-logo.png';
import React from 'react';

export const PoweredBy = () => {

	return <div className="flex justify-center mt-6">
					<p className="text-slate-600 font-bold mr-2">Powered by</p>
					<div className="w-20">
						<img src={ PokeLogo } />
					</div>
				 </div>
	
};
