import React, {Component} from 'react';

class Item extends Component{
	render(){
		return(
			<li className="product-item">
				<div className="product-item-inner">
					{this.props.data.name === this.props.user.displayName ? <span className="product-item-delete uk-text-danger" uk-icon="icon: trash" onClick={this.props.removeItem}></span> : ''}
					<p className="product-item-element">
						<span className="uk-text-primary" uk-icon="icon: user"></span>
						{this.props.data.name === this.props.user.displayName ? <span className="uk-text-primary">{this.props.data.name}</span> : this.props.data.name}
					</p>
					<p className="uk-text-meta product-item-element">
						<span className="uk-text-primary" uk-icon="icon: calendar"></span>
						{<ItemDate time={this.props.data.time} />}
					</p>
					<p className="product-item-element">
						<span className="uk-text-primary" uk-icon="icon: cart"></span>
						{this.props.data.product}
					</p>
				</div>
			</li>
		)
	}

}

export default Item;