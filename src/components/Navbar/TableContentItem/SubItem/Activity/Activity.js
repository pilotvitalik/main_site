import React, { Component } from 'react';

import style from './activity.module.css';

class Activity extends Component{
	render(){
		return(
			<div className={style.item}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

export default Activity;