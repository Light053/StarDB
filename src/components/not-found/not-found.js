// Импорт необходимых зависимостей и стилей
import { useNavigate } from 'react-router-dom';
import './not-found.css';

// Функциональный компонент для отображения страницы 404
const NotFound = () => {
	// Хук для навигации между страницами
	const navigate = useNavigate();

	// Функция для перенаправления на главную страницу
	const onRedirect = () => {
		navigate('/');
	}

	// Возвращаем разметку страницы 404
	return (
		<div>
			<h2 className="select">Страница не найдена :(</h2>
			<div className='button'>
				<button onClick={onRedirect} className="button-for-redirect select">
					Перейти на главную страницу
				</button>
			</div>
			<img src="https://avatanplus.com/files/resources/original/5783cc02c6863155dad4eafd.png" alt="" />
		</div>
	);
}

export default NotFound;
