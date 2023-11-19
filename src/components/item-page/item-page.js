import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row'

const ItemPage = ({ getItem, getItemImage, getItemInfo, getAllItems, onItemClick, selectedItem }) => {

	const itemList = (
		<div className="item-list-person">
			<ItemList onSelectedItem={onItemClick}
				getData={getAllItems}
				renderItem={(item) => `${item.name} (${item.diameter || item.model || item.gender})`}
			/>
		</div>
	)

	const itemDetails = (
		<ItemDetails
			itemId={selectedItem}
			getData={getItem}
			getImageUrl={getItemImage}
			properties={getItemInfo}
		/>
	)

	return (
		<Row left={itemList} right={itemDetails} />
	)
}

export default ItemPage;