import React from 'react';
import Activity from './Activity/Activity';

import { useSelector } from 'react-redux';

import styles from './subItem.module.css';

function SubItem(props){
	const list = useSelector(state => state.updHeight);
	console.log(list.maxHeight);

	const activities = props.data.map((item) => 
		<Activity key={item.id} value={item.name} link={item.url}/>
	);

	return(
		<div className={styles.item} style={{maxHeight: list.maxHeight + 'px'}}>
			<p>{props.value}</p>
			{activities}
		</div>
	);
}

export default SubItem;