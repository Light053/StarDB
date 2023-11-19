// Импорт необходимых компонентов и зависимостей
import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { starshipInfo } from '../item-details/item-info';

// Функциональный компонент для отображения подробностей о звездолете
const StarshipDetails = ({ swapiService }) => {
	// Получение параметра из URL с использованием хука useParams
	const { id } = useParams();

	// Возвращаем компонент с подробностями о звездолете
	return <ItemDetails
		itemId={id}
		getData={swapiService.getAllStarship}
		getImageUrl={swapiService.getStarshipImage}
		properties={starshipInfo}
	/>;
}

export default withSwapiService(StarshipDetails);
