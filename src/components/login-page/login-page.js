// Импорт необходимых зависимостей
import { Navigate } from 'react-router-dom';

// Функциональный компонент для отображения страницы входа
const LoginPage = ({ isLoggedIn, onLogin }) => {
	// Если пользователь уже вошел, перенаправляем на главную страницу
	if (isLoggedIn) {
		return <Navigate replace to={'/'} />;
	}

	// Иначе отображаем форму входа
	return (
		<div className="jumbotron">
			<h2>Войдите, чтобы увидеть секретную страницу</h2>
			<button className="btn btn-primary"
				onClick={() => onLogin()}>
				Войти
			</button>
		</div>
	);
}

export default LoginPage;
