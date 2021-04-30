import React from 'react';
import {Redirect} from "react-router-dom";
import Menu from "./Menu";
import { render } from '@testing-library/react';
class LoginForm extends React.Component{

    constructor(props){
        super(props);
        
        const token=localStorage.getItem("Token")   
        this.state={
            username:"",
            password:"",
            email:"",
            loggedIn:"false"
        }
    }   
    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
            alert("Login success");
            localStorage.setItem("Token",resJson.token);
            this.setState({
                
                loggedIn: true
              });

        }else{
            alert(resJson.error)
        }
    }

    setInputValue=(e)=>{
        //mngher [] hyftker eno property fl state 
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        

        if(this.state.loggedIn){
            return <Redirect to ="/todo"/> }
                                                   
            //onChange={(e)=>this.setState({username:e.target.value})}
        return <div class="">
           
            <h1>Login</h1>
            <div class="form-group">
            Username:<input type="text" class="form-control" value={this.state.username} onChange={this.setInputValue} name="username" placeholder="Enter Username" /><br/>

            </div>
            <div class="form-group">
            Password:<input type="password" class="form-control" value={this.state.password} onChange={this.setInputValue} name="password" placeholder="Password" /><br/>
            </div>
            <div class="form-group">
            Email:<input type="email" class="form-control" value={this.state.email} onChange={this.setInputValue} name="email" placeholder="Enter email" /><br/>
            </div>
            <button onClick={this.login} class="btn btn-primary" >Login</button>
        
        </div>  
    }

}


export default LoginForm;
