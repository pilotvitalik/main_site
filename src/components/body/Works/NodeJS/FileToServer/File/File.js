import React from 'react';
import style from '../fileToServer.module.css';

function File(props){
    const kb = 1024;
    const mb = 1048576;
    let actSize = (props.file.size < 102400) ? `${(props.file.size/kb).toFixed(2)} КБ` : `${(props.file.size/mb).toFixed(2)} МБ`;

    return(
        <div className={style.itemFile}>
            <form>
                <label htmlFor={props.idInput}></label>
                <input id={props.idInput} type='checkbox'/>
            </form>
            <p>{props.ind + 1}.</p>
            <p>{props.file.name.replace(/.[a-zA-Z]+$/g, '')}</p>
            <p>{actSize}</p>
            <button type='button'><span></span><span></span></button>
        </div>
    );
}

export default File;