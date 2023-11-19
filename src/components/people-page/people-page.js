// Импорт необходимых компонентов и хуков
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { personInfo } from '../item-details/item-info';
import ItemPage from '../item-page/item-page';
import withSwapiService from '../hoc-helpers/with-swapi-service';

// Функциональный компонент для отображения страницы с персонами
const PeoplePage = ({ swapiService }) => {
	// Хук для навигации между страницами
	const navigate = useNavigate();
	// Хук для получения параметра из URL
	const { id } = useParams();

	// Пропсы для компонента ItemPage
	const props = {
		getItem: swapiService.getPerson,
		getItemImage: swapiService.getPersonImage,
		getItemInfo: personInfo,
		getAllItems: swapiService.getAllPeople,
	};

	// Обработчик клика на элементе списка
	const handleItemClick = (itemId) => {
		// Перенаправление на страницу с подробностями о выбранной персоне
		navigate(`/people/${itemId}`);
	};

	// Возвращаем компонент страницы с персонами
	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	);
};

export default withSwapiService(PeoplePage);
