import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './navbar.module.css';
import { useSelector } from 'react-redux';

function Navbar(){
	const list = useSelector(state => state.header.navbar);
	const isShow = useSelector(state => state.header.isShowNavbar);
	let location = useLocation();

	const items = list.map((item, index) =>
		<Link key={item.id}
			  className={(location.pathname === item.url) ?
			  	style.activeLink + ' ' + style.linkItem :
			  	style.linkItem}
			  to={item.url}>
				{item.name}
		</Link>
	);

	console.log(location)
	return(
		<nav className={isShow ? style.showNavbar : ''}>
			{items}
		</nav>
	);
}

export default Navbar;