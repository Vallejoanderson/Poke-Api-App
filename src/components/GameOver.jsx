

import React from 'react';
import GameOverImg from '../resources/game-over.png';

export const GameOver = () => {
	return <div className="animate__animated animate__bounceInDown w-80 mx-auto">
					<img src={ GameOverImg }/> 
				 </div>
};