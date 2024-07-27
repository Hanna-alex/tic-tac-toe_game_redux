export const SET_FIELD = 'SET_FIELD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_IS_GAME_ENDED = 'SET_IS_GAME_ENDED';
export const SET_WINNER = 'SET_WINNER';
export const SET_IS_DRAW = 'SET_IS_DRAW';


export const setField = (field) => ({ type: SET_FIELD, payload: field });
export const setCurrentPlayer = (player) => ({ type: SET_CURRENT_PLAYER, payload: player });
export const setIsGameEnded = (bool) => ({ type: SET_IS_GAME_ENDED, payload: bool });
export const setWinner = (winner) => ({ type: SET_WINNER, payload: winner });
export const setIsDraw = (bool) => ({ type: SET_IS_DRAW, payload: bool });
