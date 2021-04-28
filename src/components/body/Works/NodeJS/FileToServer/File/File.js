import React from 'react';
import style from '../fileToServer.module.css';
import Close from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#d5d5d5',
        '&:hover':{
            cursor: 'pointer',
            color: '#000',
        }
    },
}));

function File(props){
    const classes = useStyles();
    const kb = 1024;
    const mb = 1048576;
    let actSize = (props.file.size < 102400) ? `${(props.file.size/kb).toFixed(2)} КБ` : `${(props.file.size/mb).toFixed(2)} МБ`;

    return(
        <div className={style.itemFile}>
            <form>
                <label htmlFor={props.idInput}></label>
                <input id={props.idInput} type='checkbox'/>
            </form>
            <p className={style.number}>{props.ind + 1}.</p>
            <p className={style.name}>{props.file.name.replace(/.[a-zA-Z]+$/g, '')}</p>
            <p className={style.size}>{actSize}</p>
            <div>
                <Close className={classes.root}/>
            </div>
        </div>
    );
}

export default File;