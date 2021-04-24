import React from 'react';
import style from './works.module.css';
import ReverseNavigate from '../ReverseNavigate/ReverseNavigate';
import ListWorks from '../ListWorks/ListWorks';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Works(){
	let {path} = useRouteMatch();
	
    return(
        <div className={style.worksWrapper}>
			<ReverseNavigate/>
			<Switch>
				<Route exact path={path}>
					<ListWorks action={'main/categories'}/>
				</Route>
				<Route path={`${path}/nodejs`}>
					<ListWorks action={'main/workNode'}/>
				</Route>
			</Switch>
        </div>
    )
}

export default Works;