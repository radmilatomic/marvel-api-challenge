import React, { Component } from 'react';
import { setHeroes } from "../../actions";
import { connect } from "react-redux";

import './style.css'

const mapDispatchToProps = dispatch => {
 return {
  setHeroes: heroes => dispatch(setHeroes(heroes)),
  
 };
};

class ConnectedMain extends Component{
  constructor(props){
    super(props);
    this.typingTimer;
    this.typingTimerInterval=1000;
    this.searchHeroes=this.searchHeroes.bind(this);
    this.checkTypingStop=this.checkTypingStop.bind(this);
    this.stopTimer=this.stopTimer.bind(this);
  }

  setData(responseData){
  console.log(responseData);
  this.props.setHeroes(responseData)
}

  

  stopTimer(){
    if(this.typingTimer){
      clearTimeout(this.typingTimer);
    }
  }

checkTypingStop(){
  
  this.typingTimer=setTimeout(this.searchHeroes,this.typingTimerInterval);
}

  searchHeroes(){
    if(this.searchInput.value!==""){
    console.log("searchInput="+this.searchInput.value);
    console.log("hello from search field");
    const url=new URL('https://gateway.marvel.com:443/v1/public/characters');
    url.searchParams.append('apikey','fd901fe06288eec70dd50fee0a3aef03');
    url.searchParams.append('nameStartsWith',this.searchInput.value);
    url.searchParams.append('limit','12');

   const request=new Request(url,{
    method:'GET',
    mode:'cors'
   });

   fetch(request).then(response=>
     response.json()).then(responseData=>this.setData(responseData))
     .catch(function(error){console.log(error);})
  }
}

 render(){
  return (
    <div>

  <input type="search" placeholder="search" onChange={this.checkTypingStop} onKeyDown={this.stopTimer} ref={(a) => this.searchInput = a}/>
  </div>
  )
 }
}

const Main=connect(mapDispatchToProps)(ConnectedMain)
export default Main
