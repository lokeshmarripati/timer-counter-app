import React from "react";
class LogoutComponent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>
             <h1>Please Login</h1>
             <button onClick={this.props.toggleFun}>Sign In</button>
            </>
        )
    }
}export default LogoutComponent