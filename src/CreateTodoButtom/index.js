import React from 'react';
import './CreateTodoButtom.css';

function CreateTodoButtom( props ) {
	const onClickButton = () => {
		props.setOpenModal( prevState => !prevState );
	};

	return (
		<button
			className="CreateTodoButton"
			onClick={ onClickButton }
		>+</button>
	);
}

export { CreateTodoButtom };
