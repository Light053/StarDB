import withSwapiService from '../hoc-helpers/with-swapi-service';
import { starshipInfo } from '../item-details/item-info'
import ItemPage from '../item-page/item-page';
import { useNavigate, useParams } from 'react-router-dom';

const PlanetPage = ({ swapiService }) => {

	const { id } = useParams();
	const navigate = useNavigate();

	const props = {
		getItem: swapiService.getAllStarship,
		getItemImage: swapiService.getStarshipImage,
		getItemInfo: starshipInfo,
		getAllItems: swapiService.getAllStarships
	}

	const handleItemClick = (itemId) => {
		navigate(`/starships/${itemId}`)
	}

	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	)
}

export default withSwapiService(PlanetPage)