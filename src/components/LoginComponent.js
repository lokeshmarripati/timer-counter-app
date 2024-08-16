import React from "react";
import UserData from './UserData'
class LoginComponent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        // const{username,role}=this.props.userdata
        return(
            <>
              <UserData></UserData>
             <button onClick={this.props.toggleFun}>Sign Out</button>
            </>
        )
    }
}export default LoginComponent