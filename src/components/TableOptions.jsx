import { TableOptionsItem } from "./TableOptionsItem";


export const TableOptions = ( { pokemons } ) => {

	return(

		<div className="w-3/4 m-2 mb-0 mx-auto animate__animated animate__bounceInLeft">
			{
				pokemons.map( pokemon => 
					<TableOptionsItem 
						key = { pokemon.id } 
						pokemon = { pokemon } 
					/>
				)
			}
		</div>

	)
}