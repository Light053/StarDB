import { planetInfo } from '../item-details/item-info'
import ItemPage from '../item-page/item-page';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { useNavigate, useParams } from 'react-router-dom';

const PlanetPage = ({ swapiService }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const props =
	{
		getItem: swapiService.getPlanet,
		getItemImage: swapiService.getPlanetImage,
		getAllItems: swapiService.getAllPlanets,
		getItemInfo: planetInfo
	}

	const handleItemClick = (itemId) => {
		navigate(`/planets/${itemId}`)
	}

	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	)
}

export default withSwapiService(PlanetPage)