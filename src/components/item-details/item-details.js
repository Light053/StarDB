import React, { useEffect, useState } from 'react';
import './item-details.css';
import Spinner from '../spinner/spinner';

const ItemDetails = ({ itemId, getData, getImageUrl, properties }) => {
	// Состояние для хранения данных о выбранном элементе
	const [item, setItem] = useState(null);
	// Состояние для хранения URL изображения
	const [image, setImage] = useState(null);

	// Эффект для получения данных о выбранном элементе
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

	// Эффект для обновления изображения после получения данных
	useEffect(() => {
		if (item) {
			const imageUrl = getImageUrl(item);
			setImage(imageUrl);
		}
	}, [getImageUrl, item]);

	// Если itemId не определен, выводим сообщение о выборе элемента
	if (itemId === undefined) {
		return (
			<h2 className='select'>
				Please select an item from the list
			</h2>
		);
	}

	// Если данные еще загружаются, отображаем спиннер
	if (!item) {
		return (
			<div className="">
				<Spinner />
			</div>
		);
	}

	// Отображаем детали элемента
	return (
		<div className="item-details card">
			<img className="item-image" src={image} alt="Photo not found!" />

			<div className="card-body">
				<h4 className="name-item">{item?.name || 'Unknown'}</h4>
				<ul className="list-group list-group-flush">
					{/* Маппинг свойств для отображения */}
					{properties.map((property, index) => (
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
