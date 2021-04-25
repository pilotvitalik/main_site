import React from 'react';
import style from './fileToServer.module.css';

function FiletoServer(){
	return(
		<div className={style.wrapperFiles}>
			<div className={style.uploadBlock}>
				<form>
					<div className={style.dropDownBlock}>
						<img/>
						<p>
							Перетащите файлы для отправки или
						</p>
					</div>
					<div>
						<label htmlFor='uploadFile'>Загрузить файл</label>
						<input id='uploadFile' type='file' name='upload_file' multiple/>
					</div>
				</form>
			</div>
			<div className={style.listUploads}>
			</div>
		</div>
	);
}

export default FiletoServer;