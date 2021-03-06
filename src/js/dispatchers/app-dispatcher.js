import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register( callBack ) {
	return flux.register( callBack );
}

export function dispatch( actionType, action ) {
	console.log(actionType);
	flux.dispatch( actionType, action );
}