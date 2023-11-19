// Импорт необходимых компонентов
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';

// Функциональный компонент для отображения страницы с списком элементов и подробностями
const ItemPage = ({ getItem, getItemImage, getItemInfo, getAllItems, onItemClick, selectedItem }) => {
	// Список элементов
	const itemList = (
		<div className="item-list-person">
			<ItemList onSelectedItem={onItemClick}
				getData={getAllItems}
				// Отображение каждого элемента с дополнительными подробностями
				renderItem={(item) => `${item.name} (${item.diameter || item.model || item.gender})`}
			/>
		</div>
	);

	// Подробности выбранного элемента
	const itemDetails = (
		<ItemDetails
			itemId={selectedItem}
			getData={getItem}
			getImageUrl={getItemImage}
			properties={getItemInfo}
		/>
	);

	// Возвращаем компонент с двумя панелями (список и подробности)
	return (
		<Row left={itemList} right={itemDetails} />
	);
}

export default ItemPage;
