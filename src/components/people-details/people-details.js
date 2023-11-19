// Импорт необходимых компонентов и зависимостей
import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { personInfo } from '../item-details/item-info';

// Функциональный компонент для отображения подробностей о персоне
const PeopleDetails = ({ swapiService }) => {
	// Получение параметра из URL с использованием хука useParams
	const { id } = useParams();

	// Возвращаем компонент с подробностями о персоне
	return <ItemDetails
		itemId={id}
		getData={swapiService.getPerson}
		getImageUrl={swapiService.getPersonImage}
		properties={personInfo}
	/>;
}

export default withSwapiService(PeopleDetails);
