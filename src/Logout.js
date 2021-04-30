import React from 'react';
import LoginForm from './LoginForm'
import {Redirect} from "react-router-dom";

class Logout extends React.Component{
    constructor (){
        super();
        localStorage.removeItem("Token");
}

    render ()
    {

        return <Redirect to="/"/>

    }
}

export default Logout;