import './item-list.css';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/spinner';


const ItemList = ({ onSelectedItem, getData, renderItem }) => {
	const [itemListData, setItemListData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const people = await getData();
				setItemListData(people);
			} catch (error) {
				console.error('Error fetching data:', error);

			}
		};

		fetchData();
	}, []);

	if (!itemListData) {
		return <Spinner />;
	}

	const renderItems = (arr) => {
		return arr.map(item => {
			const label = renderItem(item);
			return (
				<li key={item.id} onClick={() => onSelectedItem(item.id)} className="list-group-item">
					{label}
				</li>
			);
		});
	};

	return (
		<ul className="item-list list-group">
			{renderItems(itemListData)}
		</ul>
	);
};

export default ItemList;
