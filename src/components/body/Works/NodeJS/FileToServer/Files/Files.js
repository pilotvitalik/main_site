import React from 'react';
import File from './File/File';
import FilesSize from './FilesSize/FilesSize';
import { useDispatch, useSelector } from 'react-redux';
import { sendFilesToServer } from '../../../../../../store/reducers/uploadFiles';
import style from '../fileToServer.module.css';

function Files(){
	let dispatch = useDispatch();

	const files = useSelector(state => state.upload.listFiles);
	const fileSize = useSelector(state => state.upload.common_size);
	const countFiles = useSelector(state => state.upload.selectedFiles);

	const listFiles = files.map((item, index) =>
		(files.length > 0)
		? <File key={item.id} file={item.file} ind={index} idInput={item.id} isCheked={item.checked}/>
		: ''
	);

console.log(countFiles)
	let btnTxt = (countFiles.files.length === 0)
		? 'Выбрать все файлы и загрузить'
		: `Загрузить ${countFiles.files.length} ${countFiles.act_name}`

	function sendFiles(e){
		(e.currentTarget.dataset.files === 'all') 
			? dispatch({type: 'upload/checkFiles', payload: 'all'})
			: dispatch({type: 'upload/checkFiles', payload: 'specific'})
		dispatch(sendFilesToServer);
	}

	return(
		<React.Fragment>
			<h3>Список файлов</h3>
			<div className={style.listFiles}>
				{listFiles}
			</div>
			{fileSize > 0 &&
				<React.Fragment>
					<span className={style.separateLine}></span>
					<FilesSize fileSize={fileSize}/>
					<button 
						type='button'
						className={style.sendBtn}
						data-files='all'
						onClick={sendFiles}>
						{btnTxt}
					</button>
				</React.Fragment>
			}
		</React.Fragment>
	);
}

export default Files;