import React from 'react';
import './TodoList.css'

function TodoList( props ) {

	/* acept props render or children render */
	const renderFun = props.render || props.children;

	return (
		<section className="TodoList-container">

			{ props.error && props.onError() }
			{ props.loading && props.onLoading() }

			{ ( !props.loading && !props.totalTodos ) && props.onEmpty() }

			{ ( !!props.totalTodos && !props.searchedTodos?.length ) && props.onEmptySearchResult( props.searchText ) }

			<ul>
				{ props.searchedTodos.map( renderFun ) }
			</ul>
		</section>
	);
}

export { TodoList };
