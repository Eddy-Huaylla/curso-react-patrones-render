import React from "react";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { useTodos } from "../CustomHooks/useTodos";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoEmpty } from "../TodoEmpty";
import { TodoError } from "../TodoError";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
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

			<TodoList
				error = { error }
				loading = { loading }
				searchedTodos = { searchedTodos }
				totalTodos = { totalTodos }
				searchText = { searchValue }
				onError = { () => <TodoError /> }
				onLoading = { () => <TodoLoading /> }
				onEmpty = { () => <TodoEmpty /> }
				onEmptySearchResult = { ( searchText ) => <p>No hay resultados para <strong>{ searchText }</strong></p>}
				render = { todo => (
						<TodoItem
							key        = {todo.text}
							text       = {todo.text}
							completed  = {todo.completed}
							onComplete = {() => completeTodo(todo.text)}
							onDelete   = {() => deleteTodo(todo.text)}
						/>
					) }
			>

				{ todo => (
					<TodoItem
						key        = {todo.text}
						text       = {todo.text}
						completed  = {todo.completed}
						onComplete = {() => completeTodo(todo.text)}
						onDelete   = {() => deleteTodo(todo.text)}
					/>
				) }

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
