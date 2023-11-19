import { useNavigate } from 'react-router-dom';
import './not-found.css'
const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h2 className="select">PAGE NOT FOUND :(</h2>
			<div className='button'>
				<button onClick={() => navigate('/')} className="button-for-redirect select">
					Go to home page
				</button>
			</div>
			<img src="https://avatanplus.com/files/resources/original/5783cc02c6863155dad4eafd.png" alt="" />

		</div>
	);
}

export default NotFound;
