// Импорт необходимых компонентов и хуков
import { planetInfo } from '../item-details/item-info';
import ItemPage from '../item-page/item-page';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { useNavigate, useParams } from 'react-router-dom';

// Функциональный компонент для отображения страницы с планетами
const PlanetPage = ({ swapiService }) => {
	// Хук для получения параметра из URL
	const { id } = useParams();
	// Хук для навигации между страницами
	const navigate = useNavigate();

	// Пропсы для компонента ItemPage
	const props =
	{
		getItem: swapiService.getPlanet,
		getItemImage: swapiService.getPlanetImage,
		getAllItems: swapiService.getAllPlanets,
		getItemInfo: planetInfo,
	}

	// Обработчик клика на элементе списка
	const handleItemClick = (itemId) => {
		// Перенаправление на страницу с подробностями о выбранной планете
		navigate(`/planets/${itemId}`)
	}

	// Возвращаем компонент страницы с планетами
	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	)
}

export default withSwapiService(PlanetPage);
