import React from "react";
import './App.css';
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../CustomHooks/useLocalStorage"

const NAME_LOCALSTORANGE = 'TODOS_V1';

function App() {

	const [todos, setTodos] = useLocalStorage( NAME_LOCALSTORANGE, [] );
	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify( newTodos );
		localStorage.setItem( NAME_LOCALSTORANGE, stringifiedTodos );
		setTodos( newTodos );
	};

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};


	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<AppUI
			totalTodos     = { totalTodos }
			completedTodos = { completedTodos }
			searchValue    = { searchValue }
			setSearchValue = { setSearchValue }
			searchedTodos  = { searchedTodos }
			completeTodo   = { completeTodo }
			deleteTodo     = { deleteTodo }
		/>
	);
}

export default App;
