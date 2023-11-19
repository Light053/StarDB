// Импорт зависимостей
import React from 'react';
import { Navigate } from 'react-router-dom';

// Функциональный компонент для отображения секретной страницы
const SecretPage = ({ isLoggedIn }) => {
	// Проверка авторизации пользователя
	if (isLoggedIn) {
		return (
			<div className="jumbotron text-center">
				<h2>ЭТА СТРАНИЦА ОЧЕНЬ СЕКРЕТНА!!</h2>
			</div>
		);
	}

	// Перенаправление на страницу логина в случае отсутствия авторизации
	return <Navigate replace to={'/login'} />;
}

export default SecretPage;
