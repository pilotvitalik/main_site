import React, { Component } from 'react';

import style from './tableContentItem.module.css';

class TableContent extends Component{
	render(){
		return(
			<div className={style.itemNavbar}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

export default TableContent;