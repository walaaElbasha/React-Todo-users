import React from 'react';
import LoginForm from './LoginForm';
import Users from './Users';
import ToDo from './ToDo';
import Logout from  './Logout';
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

class Routes extends React.Component{

render(){
    return(
      <Router>
    <switch>
    <Route exact path="/" component={LoginForm}/>
    <Route path="/todo"> <ToDo /> </Route>
    <Route path="/users"> <Users /> </Route>
    <Route path="/logout"><Logout/> </Route>
  
  </switch>
  </Router>)
  }

}

export default Routes;
  