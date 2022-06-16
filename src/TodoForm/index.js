import React from 'react';
import './TodoForm.css'

const TodoForm = ( { addTodo, setOpenModal } ) => {
	const [ newTodoValue, setNewTodoValue ] = React.useState( "" );

	const onSubmit = ( event ) => {
		event.preventDefault();

		if( newTodoValue === "" ) {
			return false;
		}

		addTodo( newTodoValue );
		setOpenModal( prevState => !prevState );
	}

	const onChange = ( event ) => {
		setNewTodoValue ( event.target.value );
	}

	const onCancel = () => {
		setOpenModal( prevState => !prevState );
	}

	return (
		<form onSubmit={ onSubmit } >
		<label>Escribe tu nuevo To Do</label>
		<textarea
			value={ newTodoValue }
			onChange={ onChange }
			placeholder="Escribe una nueva tarea"
		/>
		<div className="TodoForm-buttonContainer">
			<button
				type="button"
				className="TodoForm-button TodoForm-button-cancel"
				onClick={ onCancel }
			>
				Cancelar
			</button>

			<button
				className="TodoForm-button TodoForm-button-add"
				type="submit"
			>
				Añadir
			</button>
		</div>
	</form>
	);
};

export { TodoForm };
