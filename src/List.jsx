
import React from "react";
import ReactDOM from "react-dom";
import {Link, useParams}  from 'react-router-dom'
export default class List extends React.Component {

constructor(props) {
    super(props);
 

  }

  render() {
    return  <div>
        
        Cat List
        <br/> 
        <ul>
        <li><Link to="/Cats/Cat/1" >Cat1</Link></li>
        <li><Link to="/Cats/Cat/2" >Cat2</Link></li>
        <li><Link to="/Cats/Cat/3" >Cat3</Link></li>
        </ul>    
        </div>;     
  }
}


