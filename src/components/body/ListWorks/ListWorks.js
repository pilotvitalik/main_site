import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import style from './listWorks.module.css';

function ListWorks(props){
	let {url} = useRouteMatch();
	const dispatch = useDispatch();

	dispatch({type: props.action, payload: ''});

	const categories = useSelector(state => state.main[props.type]);

	const listCat = categories.map(item => 
		<Link key={item.id} to={`${url}${item.url_page}`} className={style.cat}>
			<img src={process.env.PUBLIC_URL + item.url_image} alt={item.alt}/>
			<span>{item.name}</span>
		</Link>
	);

	return (
		<div className={style.categories}>{listCat}</div>
	);
}

export default ListWorks;