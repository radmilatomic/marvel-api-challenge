import React, {Component} from 'react'
import { connect } from "react-redux";
import './style.css';
import HeroItem from "../heroItem"

const mapStateToProps = state => {
  return { heroes: state.heroes };
};

class ConnectedHeroList extends Component{
    render(){
    	console.log(this.props.heroes)
        if(!this.props.heroes){
            return <div>Waiting for results</div>// ovo radimo da nam ne pukne aplikacija ako nema nista u store-u
        }
        return (

            <div>
           
            <div className="table">
                
            {this.props.heroes.map((item)=><HeroItem item={item} key={item.id}/>)}
            </div>
            </div>
            )
    }
}

const HeroList=connect(mapStateToProps)(ConnectedHeroList) 
export default HeroList