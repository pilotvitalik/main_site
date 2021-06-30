import React from 'react';
import style from './works.module.css';
import ReverseNavigate from '../ReverseNavigate/ReverseNavigate';
import ListWorks from '../ListWorks/ListWorks';
import Node from './NodeJS/Node';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Works(){
	let {path} = useRouteMatch();
	
    return(
        <div className={style.worksWrapper}>
			<ReverseNavigate/>
			<Switch>
				<Route exact path={path}>
					<ListWorks action={'main/categories'} type={'categories'}/>
				</Route>
				<Route exact path={`${path}/nodejs`}>
					<ListWorks action={'main/workNode'} type={'node'}/>
				</Route>
				<Route path={`${path}/nodejs/:projects`}>
					<Node/>
				</Route>
			</Switch>
        </div>
    )
}

export default Works;