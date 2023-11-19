import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { personInfo } from '../item-details/item-info'


const PeopleDetails = ({ swapiService }) => {
	const { id } = useParams();
	return <ItemDetails
		itemId={id}
		getData={swapiService.getPerson}
		getImageUrl={swapiService.getPersonImage}
		properties={personInfo}
	/>;
}

export default withSwapiService(PeopleDetails);