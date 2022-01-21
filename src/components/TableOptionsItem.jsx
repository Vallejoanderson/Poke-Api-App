

export const TableOptionsItem = ( { pokemon } ) => {

	return( 
		<p 
			className="bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 hover:bg-purple-600 
			hover:text-slate-50 cursor-pointer text-center uppercase text-slate-300 font-bold 
			rounded-lg py-2 my-3 tracking-widest hover:skew-y-1"
			onClick={ () => console.log('You have selected', pokemon.name ) }
		>
				{ pokemon.name }
		</p> )
}