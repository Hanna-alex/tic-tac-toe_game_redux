
import { appReducer } from './reducer';

let listeners = [];

const createStore = (initState) => {
	let state = initState;

	return {
		getState: () => state,
		dispatch: (action) => {
			state = appReducer(state, action);
			listeners.forEach((listener) => listener());
		},
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter((l) => l !== listener);
			};
		},
	};
};

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(null),
	winner: null,
};

export const store = createStore(initialState);


