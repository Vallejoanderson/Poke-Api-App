import { useEffect, useState } from "react";
import { getPokemon } from "../services/getPokemon";


export const usePokemons = () => {

  const [ pokemons, setPokemons ] = useState([]);

  useEffect( () => {

    Promise.all( [ getPokemon(), getPokemon(), getPokemon(), getPokemon() ] )
      .then( values => setPokemons( values ) )

  }, [] );

  return( pokemons );

}