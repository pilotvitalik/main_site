import React from 'react';
import Registration from '../../../../../common/Registration/Registration';
import style from '../fileToServer.module.css';

function Success(props){
	let text = (props.status === 'success')
		? 'Загрузка выполнена успешно'
		: 'Произошла ошибка. Попробуйте повторить позднее';

	let registration = (props.status === 'success')
		? <Registration/>
		: '';

	return(
		<div className={style.successBlock}>
			<h3>
				{text}
			</h3>
			{registration}
		</div>
	);
}

export default Success;