import './Field.css'
import PropTypes from 'prop-types'


export const Field = ({ field, clickField }) => {

	return (
		<div className='field'>

			{field.map((elem, index) =>
				<button key={index} className='btn' onClick={() => clickField(index)}>{elem}</button>
			)}

		</div>
	)
}

Field.propTypes = {
	fieldArr: PropTypes.array,
	clickField: PropTypes.func,
}
