import './Information.css'
import PropTypes from 'prop-types'

export const Information = ({ player, isEnd, isDraw, winner }) => {

	return (
		<p className='info'>{isDraw ? `Ничья` : ''}{isEnd ? `Победа: ${winner}` : ''}{!isEnd && !isDraw ? `Сейчас ходит: ${player}` : ''}</p>
	)

}

Information.propTypes = {
	player: PropTypes.string,
	isEnd: PropTypes.bool,
	isDraw: PropTypes.bool,
	winner: PropTypes.string
}
