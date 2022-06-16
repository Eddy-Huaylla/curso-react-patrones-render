import React from "react";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { useTodos } from "../CustomHooks/useTodos";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import './App.css';


function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
    	setOpenModal,
		completedTodos,
		totalTodos,
		searchValue,
		setSearchValue,
		addTodo
	} = useTodos();

	return (
		<React.Fragment>
			<TodoHeader>
				<TodoCounter
					completedTodos = { completedTodos }
					totalTodos = { totalTodos }
				/>

				<TodoSearch
					searchValue = { searchValue }
					setSearchValue = { setSearchValue }
				/>

			</TodoHeader>

			<TodoList>
				{error && <p>Desespérate, hubo un error...</p>}
				{loading && <p>Estamos cargando, no desesperes...</p>}
				{(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

				{
					searchedTodos.map( todo => (
						<TodoItem
							key        = {todo.text}
							text       = {todo.text}
							completed  = {todo.completed}
							onComplete = {() => completeTodo(todo.text)}
							onDelete   = {() => deleteTodo(todo.text)}
						/>
					))
				}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm
						addTodo = { addTodo }
						setOpenModal = { setOpenModal }
					/>
				</Modal>
			)}

			<CreateTodoButtom
				setOpenModal = { setOpenModal }
			/>

		</React.Fragment>
	);
}

export default App;
