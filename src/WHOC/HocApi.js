import axios from "axios";
import React from "react";
const apiHoc = (ReturnInput,url)=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                results:[]
            }
        }
        componentDidMount(){
            axios.get(url)
            .then((res) => this.setState({ results: res.data }))
            .catch((err) => console.log(err));
        }
        render(){
            return <ReturnInput results={this.state.results}{...this.props}></ReturnInput>
        }
    }
   
}
export default apiHoc