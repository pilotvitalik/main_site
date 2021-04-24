import React from 'react';
import style from './works.module.css';
import ReverseNavigate from '../ReverseNavigate/ReverseNavigate';
import { useSelector } from 'react-redux';
import { Link, Switch, Route, useLocation, useRouteMatch, useParams } from 'react-router-dom';

function Works(){
	const categories = useSelector(state => state.main.categories);
	const location = useLocation();
	let {path, url} = useRouteMatch();
	
	const listCat = categories.map(item => 
		<Link key={item.id} to={`${url}${item.url_page}`} className={style.cat}>
			<img src={process.env.PUBLIC_URL + item.url_image} alt={item.alt}/>
			<span>{item.name}</span>
		</Link>
	);
    return(
        <div className={style.worksWrapper}>
			<ReverseNavigate/>
			<Switch>
				<Route exact path={path}>
					<div className={style.categories}>{listCat}</div>
				</Route>
				<Route path={`${path}/nodejs`}>
					<div className={style.categories}>Hello world!</div>
				</Route>
			</Switch>
        </div>
    )
}

export default Works;