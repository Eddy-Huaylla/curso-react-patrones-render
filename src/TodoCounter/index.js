import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter () {
	return (
		<TodoContext.Consumer>
			{
				(
					{
						completedTodos,
						totalTodos
					}
				) => (
					<h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
				)
			}
		</TodoContext.Consumer>
	);
}

export { TodoCounter };
