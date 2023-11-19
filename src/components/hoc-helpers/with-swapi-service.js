// Импорт SwapiServiceConsumer из контекста
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';
import React from 'react';

// Функция высшего порядка withSwapiService, принимающая обернутый компонент Wrapped
const withSwapiService = (Wrapped) => {
	// Возвращает функцию-обертку, которая принимает пропсы
	return (props) => (
		// Обертка в SwapiServiceConsumer с передачей swapiService через пропс
		<SwapiServiceConsumer>
			{
				// Рендерит Wrapped, передавая ему swapiService и остальные пропсы
				(swapiService) => <Wrapped {...props} swapiService={swapiService} />
			}
		</SwapiServiceConsumer>
	);
};

// Экспорт функции withSwapiService
export default withSwapiService;
