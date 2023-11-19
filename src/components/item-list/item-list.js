// Импорт необходимых зависимостей и стилей
import './item-list.css';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/spinner';

// Функциональный компонент для отображения списка элементов
const ItemList = ({ onSelectedItem, getData, renderItem }) => {
	// Состояние для хранения данных о списке элементов
	const [itemListData, setItemListData] = useState(null);

	// Эффект для получения данных о списке элементов
	useEffect(() => {
		const fetchData = async () => {
			try {
				const people = await getData();
				setItemListData(people);
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};

		fetchData();
	}, []);

	// Если данные все еще загружаются, отображаем спиннер
	if (!itemListData) {
		return <Spinner />;
	}

	// Функция для отображения индивидуальных элементов
	const renderItems = (arr) => {
		return arr.map(item => {
			const label = renderItem(item);
			return (
				// Обработчик события щелчка для выбора элемента
				<li key={item.id} onClick={() => onSelectedItem(item.id)} className="list-group-item name">
					{label}
				</li>
			);
		});
	};

	// Возвращаем список элементов
	return (
		<ul className="item-list list-group">
			{renderItems(itemListData)}
		</ul>
	);
};

export default ItemList;
