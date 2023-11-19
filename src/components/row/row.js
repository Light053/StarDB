import './row.css'

const Row = ({ left, right }) => {
	return (
		<div className="person-info ">
			<div className='list'>
				{left}
			</div>

			<div className="person-details-info">
				{right}
			</div>
		</div>
	)
}

export default Row