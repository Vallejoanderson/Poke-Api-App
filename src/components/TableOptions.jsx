import { TableOptionsItem } from "./TableOptionsItem";


export const TableOptions = ( { pokemons } ) => {

	return(

		<div className="w-3/4 m-2 mx-auto">
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