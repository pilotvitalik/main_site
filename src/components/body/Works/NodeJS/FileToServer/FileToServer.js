import React from 'react';
import style from './fileToServer.module.css';
import { useDispatch, useSelector } from 'react-redux';

function FiletoServer(){
	let dispatch = useDispatch();
	dispatch({type: 'main/nodeUploadFile', payload: ''});

	const images = useSelector(state => state.main.uploadFiles);
	console.log(images);

	return(
		<div className={style.wrapperFiles}>
			<div className={style.uploadBlock}>
				<div className={style.dropDownBlock}>
					<img src={images.drag_drop} alt={images.alt_drag_drop}/>
					<p>
						Перетащите файлы для отправки или
					</p>
				</div>
				<form>
					<label htmlFor='uploadFile'>Загрузить файл</label>
					<input id='uploadFile' type='file' name='upload_file' multiple/>
				</form>
			</div>
			<div className={style.listUploads}>
			</div>
		</div>
	);
}

export default FiletoServer;