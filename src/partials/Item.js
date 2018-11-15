import React, {Component} from 'react'

class Item extends Component{
	render(){
		return(
			<li className="item">
				{this.props.data.name}
			</li>
		)
	}

}

export default Item;