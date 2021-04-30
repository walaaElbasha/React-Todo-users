import React from 'react';
import Menu from './Menu';

import {Redirect} from "react-router-dom";



class Users extends React.Component{

    constructor(){

        super();
        const token=localStorage.getItem("Token");
        console.log("tokeeeen:" +token)
        let loggedIn=true;

        if (token==null){
            loggedIn=false
        }
        this.state={
            tasks:[],
            loggedIn,
            users:[],
            loading:false
        }
    }




    

    async componentDidMount(){
        this.setState({loading:true});
    
        
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
    
    }

    render(){

        if(this.state.loggedIn===false){
            return <Redirect to="/" />
        }
        return <div>
              <Menu/>
            {!this.state.loading ? this.state.users.map((item)=>{
                return <UserView key={item.id}  user={item} />
            }): "Loading Users"}
        </div>
    }
}

class UserView extends React.Component{
    constructor(){
        super();
        
    }

    render(){
      
        return <div>
            
            <img src={this.props.user.avatar} style={{width:100,height:100}} /><br/>
            <span>{this.props.user.first_name} {this.props.user.last_name}</span>
            <div>Email : {this.props.user.email}</div>
        </div>
    }
}

export default Users;