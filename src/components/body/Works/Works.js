import React from 'react';
import style from './works.module.css';
import ReverseNavigate from '../ReverseNavigate/ReverseNavigate';

function Works(){
    return(
        <div className={style.worksWrapper}>
			<ReverseNavigate/>
        </div>
    )
}

export default Works;