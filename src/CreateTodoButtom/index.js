import React from 'react';
import './CreateTodoButtom.css';

function CreateTodoButtom(props) {
	const onClickButton = (msg) => {
		alert(msg);
	};

	return (
		<button
			className="CreateTodoButton"
			onClick={() => onClickButton('Aquí se debería abrir el modal')}
		>+</button>
	);
}

export { CreateTodoButtom };
