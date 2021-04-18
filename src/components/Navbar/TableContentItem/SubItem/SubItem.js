import React, { Component } from 'react';
import Activity from './Activity/Activity';

import styles from './subItem.module.css';

class SubItem extends Component{
	
	
	render(){
		const activities = this.props.data.map((item) => 
			<Activity key={item.id} value={item.name} link={item.url}/>
		);
		return(
			<div className={styles.item} style={{maxHeight: this.props.maxHeiht + 'px'}}>
				<p>{this.props.value}</p>
				{activities}
			</div>
		);
	}
}

export default SubItem;