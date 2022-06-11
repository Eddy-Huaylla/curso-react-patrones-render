import React from "react";
/* import { TodoProvider } from "../TodoContext"; */
import './App.css';
/* import { AppUI } from "./AppUI"; */


/* function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
} */

function App() {
	const [ state, setState ] = React.useState( 'Estado react' )

	return (
		<React.Fragment>
			<TodoHeader>
				<TodoCounter />
				<TodoSearch />
			</TodoHeader>
			<TodoList>
				<TodoItem state={ state } />
			</TodoList>
		</React.Fragment>
	);
}

function TodoHeader( { children } ) {
	return (
		<header>
			{ children }
		</header>
	);
}

function TodoCounter() {
	return (
		<p>Todo Counter </p>
	);
}

function TodoSearch() {
	return (
		<p>Todo Search</p>
	);
}

function TodoList( { children } ) {
	return (
		<section>
			{ children }
		</section>
	);
}

function TodoItem( { state } ) {
	return (
		<p>TodoItem: { state } </p>
	);
}

export default App;
