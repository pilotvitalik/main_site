import React from 'react';

import style from './navbar.module.css';

import { useSelector } from 'react-redux';

function Navbar(){
	const list = useSelector(state => state.header.navbar);
	const isShow = useSelector(state => state.header.isShowNavbar);

	const items = list.map(item =>
		<p key={item.id} className={style.linkItem}>{item.name}</p>
	);
	return(
		<nav className={isShow ? style.showNavbar : ''}>
			{items}
		</nav>
	);
}

export default Navbar;