import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';
import React from 'react';

const withSwapiService = (Wrapped) => {
	return (props) => (
		<SwapiServiceConsumer>
			{
				(swapiService) => <Wrapped {...props} swapiService={swapiService} />
			}
		</SwapiServiceConsumer>
	);
};


export default withSwapiService;
