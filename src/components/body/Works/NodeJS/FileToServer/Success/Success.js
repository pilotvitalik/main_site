import React from 'react';
import style from '../fileToServer.module.css';

function Success(props){
	let text = (props.status === 'success')
		? 'Загрузка выполнена успешно'
		: 'Произошла ошибка. Попробуйте повторить позднее'

	return(
		<div className={style.successBlock}>
			<h3>
				{text}
			</h3>
		</div>
	);
}

export default Success;