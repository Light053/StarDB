// Импорты React и Link из React Router
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

// Компонент Header, представляющий шапку приложения
const Header = () => {
	return (
		// Общий контейнер для шапки с флекс-раскладкой
		<div className="header d-flex">
			{/* Заголовок с ссылкой на главную страницу */}
			<h3>
				<Link to="/" className='title-header'>
					Star DB
				</Link>
			</h3>
			{/* Список ссылок для навигации */}
			<ul className="d-flex">
				{/* Элемент списка для персонажей */}
				<li className='list-header-item'>
					<Link to="/people/">People</Link>
				</li>
				{/* Элемент списка для планет */}
				<li className='list-header-item'>
					<Link to="/planets/">Planets</Link>
				</li>
				{/* Элемент списка для звездолетов */}
				<li className='list-header-item'>
					<Link to="/starships/">Starships</Link>
				</li>
			</ul>
		</div>
	);
};

// Экспорт компонента Header
export default Header;
