import React from 'react';
import style from './works.module.css';
import ReverseNavigate from '../ReverseNavigate/ReverseNavigate';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Works(){
	const categories = useSelector(state => state.main.categories);
	const location = useLocation();
	
	const listCat = categories.map(item => 
		<Link key={item.id} to={location.pathname + item.url_page} className={style.cat}>
			<img src={process.env.PUBLIC_URL + item.url_image} alt={item.alt}/>
			<span>{item.name}</span>
		</Link>
	);
    return(
        <div className={style.worksWrapper}>
			<ReverseNavigate/>
			<div className={style.categories}>
				{listCat}
			</div>
        </div>
    )
}

export default Works;