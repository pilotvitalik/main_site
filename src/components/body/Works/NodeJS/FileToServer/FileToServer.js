import React, { useState } from 'react';
import Files from './Files/Files';
import Succes from './Success/Success';
import style from './fileToServer.module.css';
import { useDispatch, useSelector } from 'react-redux';

function FiletoServer(){
	let dispatch = useDispatch();
	dispatch({type: 'main/nodeUploadFile', payload: ''});

	const images = useSelector(state => state.main.uploadFiles);
	const statusSend = useSelector(state => state.upload.isSend);

	const [isHighlight, setHighlight] = useState('');

	const showActComponent = (!statusSend.trigger) ? <Files/> : <Succes status={statusSend.status}/>;

	function fileDragEnter(e){
		e.preventDefault();
		e.stopPropagation();
		setHighlight(style.highlight);
	}

	function fileDragLeave(e){
		e.preventDefault();
		e.stopPropagation();
		setHighlight('');
	}

	function fileDragOver(e){
		e.preventDefault();
		e.stopPropagation();
		setHighlight(style.highlight);
	}

	function fileDrop(e){
		e.preventDefault();
		e.stopPropagation();
		setHighlight('');
		let file = e.dataTransfer.files[0];
		dispatch({type: 'upload/addFiles', payload: file});
		dispatch({type: 'upload/calcSize', payload: file.size});
	}

	function addFile(e){
		const files = e.currentTarget.files;
		for (let key in files){
			if (typeof files[key] === 'object'){
				dispatch({type: 'upload/addFiles', payload: files[key]});
				dispatch({type: 'upload/calcSize', payload: files[key].size});
			}
		}
		e.currentTarget.value = '';
	}

	return(
		<div className={style.wrapperFiles}>
			<div
				onDragEnter = {fileDragEnter}
				onDragLeave = {fileDragLeave}
				onDragOver = {fileDragOver}
				onDrop = {fileDrop}
				className={`${style.uploadBlock} ${isHighlight}`}>
				<div className={style.dropDownBlock}>
					<img src={images.drag_drop} alt={images.alt_drag_drop}/>
					<p>
						Перетащите файлы для отправки или
					</p>
				</div>
				<form encType='multipart/form-data'>
					<label htmlFor='uploadFile'>Загрузить файл</label>
					<input id='uploadFile' type='file' name='upload_file' multiple onChange={addFile}/>
				</form>
			</div>
			<div className={style.listUploads}>
				{showActComponent}
			</div>
		</div>
	);
}

export default FiletoServer;