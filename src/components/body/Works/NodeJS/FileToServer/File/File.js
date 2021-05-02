import React from 'react';
import { useDispatch } from 'react-redux';
import Close from '@material-ui/icons/Close';
import Mark from '@material-ui/icons/Check';
import style from '../fileToServer.module.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    closeBtn: {
        color: '#d5d5d5',
        '&:hover':{
            cursor: 'pointer',
            color: '#000',
        }
    },
    mark:{
        position: 'absolute',
        width: '15px',
        height: '15px',
        top: '-1px',
        left: '-1px',
    }
}));

function File(props){
    const classes = useStyles();
    const dispatch = useDispatch();
    const kb = 1024;
    const mb = 1048576;

    let actSize = (props.file.size < 102400) ? `${(props.file.size/kb).toFixed(2)} КБ` : `${(props.file.size/mb).toFixed(2)} МБ`;

    function deleteFile(e){
        dispatch({type: 'upload/deleteFile', payload: e.currentTarget.dataset.fileId});
    }

    console.log(props.isCheked);

    return(
        <div className={style.itemFile}>
            <form>
                <label 
                    htmlFor={props.idInput}
                    onClick={() => dispatch({type: 'upload/checkedFiles', payload: props.idInput})}
                    className={props.isCheked ? style.labelCheked : ''}>
                    {props.isCheked
                        ? <Mark className={classes.mark}/>
                        : ''}
                </label>
                <input id={props.idInput} type='checkbox'/>
            </form>
            <p className={style.number}>{props.ind + 1}.</p>
            <p className={style.name}>{props.file.name.replace(/.[a-zA-Z]+$/g, '')}</p>
            <p className={style.size}>{actSize}</p>
            <Close className={classes.closeBtn} data-file-id={props.idInput} onClick={deleteFile}/>
        </div>
    );
}

export default File;