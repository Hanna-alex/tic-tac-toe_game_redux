import {
	SET_FIELD,
	SET_CURRENT_PLAYER,
	SET_IS_GAME_ENDED,
	SET_WINNER,
	SET_IS_DRAW,
} from './actions';

export const appReducer = (state, action) => {
	switch (action.type) {
		case SET_FIELD:
			return { ...state, field: action.payload };
		case SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.payload };
		case SET_IS_GAME_ENDED:
			return { ...state, isGameEnded: action.payload };
		case SET_WINNER:
			return { ...state, winner: action.payload };
		case SET_IS_DRAW:
			return { ...state, isDraw: action.payload };
		default:
			return state;
	}
};
