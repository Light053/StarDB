import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { personInfo } from '../item-details/item-info';
import ItemPage from '../item-page/item-page';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PeoplePage = ({ swapiService }) => {
	const navigate = useNavigate();
	const { id } = useParams();

	const props = {
		getItem: swapiService.getPerson,
		getItemImage: swapiService.getPersonImage,
		getItemInfo: personInfo,
		getAllItems: swapiService.getAllPeople,
	};

	const handleItemClick = (itemId) => {
		navigate(`/people/${itemId}`);
	};

	return (
		<ItemPage {...props} onItemClick={handleItemClick} selectedItem={id} />
	);
};

export default withSwapiService(PeoplePage);
