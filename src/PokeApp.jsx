import { useEffect, useState } from "react";
import { TableOptions } from "./components/TableOptions";
import { getRandomPokemon } from "./services/getRandomPokemon"
import { usePokemons } from "./hooks/usePokemons";
import { PokemonToGuess } from "./components/PokemonToGuess";
import { PokemonContext } from "./components/PokemonContext";

export const PokeApp = () => {

  const pokemons = usePokemons();
  const [ randomPokemon, setRandomPokemon ] = useState({
    hiddenPokemon: {},
    status: false,
  });
  const { hiddenPokemon, status } = randomPokemon;
  const [ folded, setFolded ] = useState( true );
  const [ win, setWin ] = useState( false );

  useEffect( () => {
    setRandomPokemon({
      hiddenPokemon: { ...pokemons[ getRandomPokemon() ] } ,
      status: true,
    })
  }, [ pokemons ] );
  
  return(
    <PokemonContext.Provider
      value = { { hiddenPokemon, setFolded, win, setWin } }
    >
      <div className="mt-28">
        {
          status && <PokemonToGuess pokemon = { { hiddenPokemon, folded} } />
        }
        <TableOptions 
          pokemons = { pokemons }
        />
      </div>
    </PokemonContext.Provider>
  )
}