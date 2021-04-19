import React from 'react';

import style from './tableContentItem.module.css';

function TableContent(props){
	return(
		<div className={style.itemNavbar}>
			<p>{props.value}</p>
		</div>
	);

}

export default TableContent;