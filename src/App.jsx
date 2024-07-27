import './App.css'
import { Field } from './components/Field.js'
import { Information } from './components/Information.js'
import { useEffect, useState } from 'react';
import { store } from './redux/store.js';
import { setField, setCurrentPlayer, setIsGameEnded,setWinner, setIsDraw} from './redux/actions.js'


export const Game = () => {
	const [currentPlayer, setCurrentPlayerState] = useState(store.getState().currentPlayer);
	const [isGameEnded, setIsGameEndedState] = useState(store.getState().isGameEnded);
	const [isDraw, setIsDrawState] = useState(store.getState().isDraw);
	const [field, setFieldState] = useState(store.getState().field);
	const [winner, setWinnerState] = useState(store.getState().winner);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const state = store.getState();
			setCurrentPlayerState(state.currentPlayer);
			setIsGameEndedState(state.isGameEnded);
			setIsDrawState(state.isDraw);
			setFieldState(state.field);
			setWinnerState(state.winner);
		});
		return () => unsubscribe();
	}, []);

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6],
	];

	const changeState = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
				store.dispatch(setIsGameEnded(true));
				store.dispatch(setWinner(arr[a]));
				return;
			}
		}
		if (!arr.includes(null)) {
			store.dispatch(setIsDraw(true));
		}
	};

	const clickField = (index) => {
		const fieldCopy = store.getState().field;

        if (isGameEnded || fieldCopy[index] || isDraw) return;

        fieldCopy[index] = currentPlayer;
        store.dispatch(setField(fieldCopy));
        store.dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
        changeState(fieldCopy);
	};

	const startAgain = () => {
		store.dispatch(setField(Array(9).fill(null)));
		store.dispatch(setCurrentPlayer('X'));
		store.dispatch(setIsGameEnded(false));
		store.dispatch(setIsDraw(false));
	};

	return (
		<div className='wrapper'>
			<Information winner={winner} player={currentPlayer} isEnd={isGameEnded} isDraw={isDraw} />
			<Field field={field} clickField={clickField} />
			{(isGameEnded || isDraw) ?
			 <button  className='btnStart'  onClick={startAgain}>Начать заново</button> :  <div className='btnDisablet'></div>
			}
		</div>
	);
};

// cd ./tic-tac-toe_game
