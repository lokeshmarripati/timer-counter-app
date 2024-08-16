import React from "react";
import LoginComponent from './LoginComponent';
import LogoutComponent from "./LogoutComponent";
import UserData from './UserData'
class LoginData extends React.Component{
    constructor(props){
        super(props)
            this.state={
               isLogged:true,
            }
        
    }
    // signin=()=>{
    //     this.setState({isLogged:false})
    // }
    // signout=()=>{
    //     this.setState({isLogged:true})
    // }

    toggleUser=()=>{
        this.setState({isLogged:!(this.state.isLogged)})
    }
    render(){
        return(
            <>
            {
                this.state.isLogged ?
                <>
              <LoginComponent toggleFun={this.toggleUser}></LoginComponent>
                </>: <>
                <LogoutComponent toggleFun={this.toggleUser}></LogoutComponent>
                </>
            }
            </>
        )
    }
}
export default LoginData