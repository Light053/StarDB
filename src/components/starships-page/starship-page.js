// Импорт необходимых компонентов и хуков
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { starshipInfo } from '../item-details/item-info';
import ItemPage from '../item-page/item-page';
import { useNavigate, useParams } from 'react-router-dom';

// Функциональный компонент для отображения страницы со звездолетами
const StarshipsPage = ({ swapiService }) => {
	// Получение параметра из URL с использованием хука useParams
	const { id } = useParams();
	// Хук для навигации между страницами
	const navigate = useNavigate();

	// Пропсы для компонента ItemPage
	const props = {
		getItem: swapiService.getAllStarship,
		getItemImage: swapiService.getStarshipImage,
		getItemInfo: starshipInfo,
		getAllItems: swapiService.getAllStarships,
	}

	// Обработчик клика на элементе списка
	const handleItemClick = (itemId) => {
		// Перенаправление на страницу с подробностями о выбранном звездолете
		navigate(`/starships/${itemId}`)
	}

	// Возвращаем компонент страницы со звездолетами
	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	)
}

export default withSwapiService(StarshipsPage);
