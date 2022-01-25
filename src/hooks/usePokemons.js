import { useEffect, useState } from "react";
import { getPokemon } from "../services/getPokemon";


export const usePokemons = ( initialState = [] ) => {

  const [ pokemons, setPokemons ] = useState( initialState );

  const getPokemons = () => {

    Promise.all( [ getPokemon(), getPokemon(), getPokemon(), getPokemon() ] )
      .then( values => setPokemons( values ) )

  }

  // console.log( pokemons )

  return{

    pokemons,
    getPokemons,

  } 

}