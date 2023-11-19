import React, { useEffect, useState } from 'react';
import './item-details.css';
import Spinner from '../spinner/spinner';

const ItemDetails = ({ itemId, getData, getImageUrl, properties }) => {

	const [item, setItem] = useState(null);
	const [image, setImage] = useState(null);
	useEffect(() => {
		const getInfo = async () => {
			if (itemId) {
				try {
					const listData = await getData(itemId);
					setItem(listData);


				} catch (error) {
					console.error('Error fetching data:', error);
				}
			}
		};

		getInfo();
	}, [getData, itemId]);

	useEffect(() => {
		if (item) {
			const imageUrl = getImageUrl(item);
			setImage(imageUrl);
		}
	}, [getImageUrl, item]);
	if (itemId === undefined) {
		return (<h2 className='select'>
			please select an item from the list</h2>)
	}

	if (!item) {
		return <div className="">
			<Spinner />
		</div>

	}

	const displayedProperties = properties;

	return (
		<div className="item-details card">
			<img className="item-image" src={image} alt="Photo not found!" />

			<div className="card-body">
				<h4 className="name-item">{item?.name || 'Неизвестно'}</h4>
				<ul className="list-group list-group-flush">
					{displayedProperties.map((property, index) => (
						<li key={index} className="list-group-item info">
							<span className="term">{property.label}: </span>
							<span>{item[property.field] || 'Unknown'}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ItemDetails;

