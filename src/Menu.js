import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import LoginForm from './LoginForm'
import Users from './Users'
import ToDo from './ToDo'
import { render } from '@testing-library/react';
import './App.css';
import Logout from './Logout' 


import {BrowserRouter as Router, Link } from "react-router-dom";

  
class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
        items:[
        {
            text:"ToDo's",
            link:"/todo"
        },
        {
            text:"Users",
            link:"/users"
        },
        {
            text:"Logout",
            link:"/logout"
        },

    ]
  }
  }
toggleActive=(text)=>{
  this.state.items.forEach((item)=>item.active=false);
  let item = this.state.items.find(x=>x.text==text);
  item.active = !item.active
  this.setState({items:this.state.items});
  //this.forceUpdate();
}

render()
{

  return <div>
    <nav className="navbar navbar-dark bg-primary">
      {this.state.items.map((item,i)=>{
          return <Link to={item.link} className="text-white" key={item.text} style={{backgroundColor:item.active?"red":""}} onClick={()=>this.toggleActive(item.text)} >| {item.text}  |</Link>
      })}
  </nav>
  </div>
}



}
//   render(){
//     return (
//         <div>
//             <nav className="navbar navbar-dark bg-primary">
//             <ul className="nav">

//             <li className="nav-item">

//                 <Link to="/todo" className="text-white" >ToDo's   |             </Link>
//               </li>
//               <li className="nav-item">

//                 <Link to="/users" className=" text-white">Users  |              </Link>
//               </li>
//               <li className="nav-item">

//                 <Link to="/logout" className="text-white"> logout</Link>
//               </li>
//             </ul>
//           </nav>
//           {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}
//         </div>

     
//     );
//   }


export default Menu;
