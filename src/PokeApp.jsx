import { useEffect, useState } from "react";
import { TableOptions } from "./components/TableOptions";
import { getRandomPokemon } from "./services/getRandomPokemon"
import { usePokemons } from "./hooks/usePokemons";
import { PokemonToGuess } from "./components/PokemonToGuess";
import { PokemonContext } from "./components/PokemonContext";
import { PlayAgain } from "./components/PlayAgain";
import { PoweredBy } from "./components/PoweredBy";
import { PokeTopImg } from "./components/PokeTopImg";
import { GameOver } from "./components/GameOver";
import { GameDataBoard } from "./components/GameDataBoard";

export const PokeApp = () => {

  const { pokemons, getPokemons } = usePokemons();
  const [ randomPokemon, setRandomPokemon ] = useState({
    hiddenPokemon: {},
    status: false,
  });
  const { hiddenPokemon, status } = randomPokemon;
  const [ folded, setFolded ] = useState( true );
  const [ round, setRound ] = useState( 1 );
  const [ played, setPlayed ] = useState( false );
  const [ hearts, setHearts ] = useState( 3 );

  useEffect( () => { 

    getPokemons()
    setPlayed( played => false );
    console.log( round );

  }, [ round ])

  useEffect( () => {
    setRandomPokemon({
      hiddenPokemon: { ...pokemons[ getRandomPokemon() ] } ,
      status: true,
    })
  }, [ pokemons ] );

  console.log( pokemons )
  
  return(
    <PokemonContext.Provider
      value = {{
                hiddenPokemon,
                setFolded,
                round,
                setRound,
                played, 
                setPlayed,
                hearts,
                setHearts,
              }}
    >
      <PokeTopImg />
      <GameDataBoard />
    
      <div>
        {
          hearts > 0 ? status && <PokemonToGuess pokemon = { { hiddenPokemon, folded} } /> : <GameOver />
        }
        <TableOptions pokemons = { pokemons } />
        <PlayAgain values = { setHearts, setRound } />
        <PoweredBy />
      </div>
    </PokemonContext.Provider>
  )
}