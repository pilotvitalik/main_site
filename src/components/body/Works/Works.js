import React from 'react';
import style from './works.module.css';
import { Link } from 'react-router-dom';

function Works(){
    return(
        <div className={style.worksWrapper}>
        	<nav>
        		<Link to='/'>Главная</Link>
        		<span>/</span>
        		<Link to='/works'>Портфолио</Link>
        	</nav>
        </div>
    )
}

export default Works;