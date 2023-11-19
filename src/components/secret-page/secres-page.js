import { Navigate } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<div className="jumbotron text-center">
				<h2>ЭТА СТРАНИЦА ОЧЕНЬ СЕКРЕТНА!!</h2>
			</div>
		)
	}

	return <Navigate replace to={'/login'} />
}

export default SecretPage