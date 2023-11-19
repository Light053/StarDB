import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { personInfo } from '../item-details/item-info'


const PlanetsDetails = ({ swapiService }) => {
	const { id } = useParams();
	return <ItemDetails
		itemId={id}
		getData={swapiService.getPlanet}
		getImageUrl={swapiService.getPlanetImage}
		properties={personInfo}
	/>;
}

export default withSwapiService(PlanetsDetails);