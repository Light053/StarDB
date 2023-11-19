import { Navigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
	if (isLoggedIn) {
		return <Navigate replace to={'/'} />
	}
	return (
		<div className="jumbotron">
			<h2>Login to see secret page</h2>
			<button className="btn btn-primary"
				onClick={() => onLogin()}>
				Login
			</button>
		</div>
	)
}

export default LoginPage