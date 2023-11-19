// Импорт зависимостей
import React from "react";

// Создание контекста для сервиса Swapi
const {
	Provider: SwapiServiceProvider,
	Consumer: SwapiServiceConsumer
} = React.createContext();

export {
	SwapiServiceConsumer,
	SwapiServiceProvider
}
