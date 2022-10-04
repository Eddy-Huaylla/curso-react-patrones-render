import React from 'react';
import { WithStorageListener } from './WithStorageListener';

const ChangeAlert=({show,toggleShow})=>{
	if ( show ) {
		return(
			<div>
				<p>Hubo hubo cambios</p>
				<button onClick={toggleShow}>Volver a cargar la información</button>
			</div>
		);
	}
	else {
		return null
	}
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
