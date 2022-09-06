import React from 'react';
import { WithStorageListener } from './withStorageListener';

const ChangeAlert=({show,toggleShow})=>{
	if ( show ) {
		return <p>Hubo cambios</p>
	}
	else {
		return <></>
	}
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
