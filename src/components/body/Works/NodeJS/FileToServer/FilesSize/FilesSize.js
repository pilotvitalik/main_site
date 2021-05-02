import React from 'react';
import style from '../fileToServer.module.css';

function FilesSize(props){
	const kb = 1024;
    const mb = 1048576;

    let actSize = (props.fileSize < 102400) ? `${(props.fileSize/kb).toFixed(2)} КБ` : `${(props.fileSize/mb).toFixed(2)} МБ`;

	return(
		<div className={style.commonSize}>
			<p>
				Общий размер:
			</p>
			<p>
				{actSize}
			</p>
		</div>
	);
}

export default FilesSize;