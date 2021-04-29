import React, { useState } from 'react';
import File from './File/File';
import style from './fileToServer.module.css';
import { useDispatch, useSelector } from 'react-redux';

function FiletoServer(){
	let dispatch = useDispatch();
	dispatch({type: 'main/nodeUploadFile', payload: ''});

	const images = useSelector(state => state.main.uploadFiles);
	const files = useSelector(state => state.upload.listFiles);

	const [isHighlight, setHighlight] = useState('');

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
	}

	function addFile(e){
		const file = e.currentTarget.files[0];
		dispatch({type: 'upload/addFiles', payload: file});
	}

	console.log(files);
	const listFiles = files.map((item, index) =>
		(files.length > 0) ?
		<File key={item.id} file={item.file} ind={index} idInput={item.id}/> :
		''
	);

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
				<form>
					<label htmlFor='uploadFile'>Загрузить файл</label>
					<input id='uploadFile' type='file' name='upload_file' multiple onChange={addFile}/>
				</form>
			</div>
			<div className={style.listUploads}>
				<h3>Список файлов</h3>
				<div className={style.listFiles}>
					{listFiles}
				</div>
			</div>
		</div>
	);
}

export default FiletoServer;