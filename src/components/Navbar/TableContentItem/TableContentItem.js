import React, { Component } from 'react';
import SubItem from './SubItem/SubItem';

import style from './tableContentItem.module.css';

class TableContent extends Component{
	constructor(props){
		super(props);
		this.state = {
			maxHeight: 0,
		};
		this.showSubItem = this.showSubItem.bind(this);
	}

	showSubItem(e){
		this.setState(state => ({
			maxHeight: '117',
		}));
	}


	render(){
		const items = this.props.subItem.map((item) => 
			<SubItem 
			key={item.id}
			value={item.name}
			data={item.subItem}/>
		);

		return(
			<div className={style.itemNavbar}>
				<p onMouseOver={this.showSubItem}>{this.props.value}</p>
				{items}
			</div>
		);
	}
}

export default TableContent;