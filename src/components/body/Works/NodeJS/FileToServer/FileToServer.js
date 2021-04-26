import React, { useState } from 'react';
import style from './fileToServer.module.css';
import { useDispatch, useSelector } from 'react-redux';

function FiletoServer(){
	console.log('FiletoServer');
	const globalArr = [];

	let dispatch = useDispatch();
	dispatch({type: 'main/nodeUploadFile', payload: ''});

	const images = useSelector(state => state.main.uploadFiles);
	const [isHighlight, setHighlight] = useState('');
	const fil = useSelector(state => state.upload);
	console.log(fil);
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
		console.log(file);
		dispatch({type: 'upload/addFiles', payload: file});
		globalArr.push(file);
		console.log(globalArr);
	}

	function addFile(e){
		const file = e.currentTarget.files[0];
		console.log(file)
		console.log(typeof file);
		globalArr.push(file);
		console.log(globalArr);
		dispatch({type: 'upload/addFiles', payload: file});
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
			</div>
			<div className={style.listUploads}>
			<form>
					<label htmlFor='uploadFile'>Загрузить файл</label>
					<input id='uploadFile' type='file' name='upload_file' multiple onChange={addFile}/>
				</form>
			</div>
		</div>
	);
}

export default FiletoServer;