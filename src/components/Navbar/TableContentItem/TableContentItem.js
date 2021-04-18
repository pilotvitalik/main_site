import React from 'react';
import SubItem from './SubItem/SubItem';

import { useDispatch } from 'react-redux';

import style from './tableContentItem.module.css';

function TableContent(props){
  	const dispatch = useDispatch();

  	function showSubItem(e){
		dispatch({type: 'css/plusHeight', payload: ''});
		setTimeout(() => {
			dispatch({type: 'css/minusHeight', payload: ''});
		}, 2000)
	}

	const items = props.subItem.map((item) => 
		<SubItem 
		key={item.id}
		value={item.name}
		data={item.subItem}/>
	);

	return(
		<div className={style.itemNavbar}>
			<p onMouseOver={showSubItem}>{props.value}</p>
			{items}
		</div>
	);

}

export default TableContent;