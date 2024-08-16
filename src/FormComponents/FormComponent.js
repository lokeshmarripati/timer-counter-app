import React from "react";

class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uname:"",
            pwd:""
        }
    }
    render(){
        return(
            <>
            <h1>Login Form</h1>
            username:<input></input>
            pwd:<input></input>
            </>
        )
    }
}