import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<div className="header d-flex">
			<h3 >
				<Link to="/" className='title-header'>
					Star DB
				</Link>
			</h3>
			<ul className="d-flex">
				<li className='list-header-item'>
					<Link to="/people/">People</Link>
				</li>
				<li className='list-header-item'>
					<Link to="/planets/">Planets</Link>
				</li>
				<li className='list-header-item'>
					<Link to="/starships/">Starships</Link>
				</li>
			</ul>
		</div >
	);
};


export default Header;