import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { TableOptions } from "./components/TableOptions";
import { getRandomPokemon } from "./services/getRandomPokemon"
import { usePokemons } from "./hooks/usePokemons";
import { PokemonToGuess } from "./components/PokemonToGuess";
// import { useRandomPokemon } from "./hooks/useRandomPokemon";


export const PokeApp = () => {

  const pokemons = usePokemons();
  const [ randomPokemon, setRandomPokemon ] = useState({
    pokemon: {},
    status: false,
  });
  const { pokemon, status } = randomPokemon;


  useEffect( () => {
    setRandomPokemon({
      pokemon: { ...pokemons[ getRandomPokemon() ] } ,
      status: true,
    })
  }, [ pokemons ] );
  
  
  return (
    <div className="mt-28">
      {
        status && <PokemonToGuess pokemon = { pokemon } />
      }
      <TableOptions 
        pokemons = { pokemons }
      />
    </div>
  )
}