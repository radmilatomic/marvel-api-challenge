import React, {Component} from 'react'
import { connect } from "react-redux";
import './style.css';

class HeroItem extends Component{
	render(){
		return(
		<div>
		<div>{this.props.item.name}</div>
		<img src={this.props.item.thumbnail.path+"/portrait_xlarge.jpg"}/>
		</div>
		)
	}
}

export default HeroItem