

import React from 'react';
import GameOverImg from '../resources/game-over.png';

export const GameOver = () => {
	return <div className="animate__animated animate__bounceInDown">
					<img src={ GameOverImg }/> 
				 </div>
};