import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { starshipInfo } from '../item-details/item-info'


const StarshipDetails = ({ swapiService }) => {
	const { id } = useParams();
	return <ItemDetails
		itemId={id}
		getData={swapiService.getAllStarship}
		getImageUrl={swapiService.getStarshipImage}
		properties={starshipInfo}
	/>;
}

export default withSwapiService(StarshipDetails);