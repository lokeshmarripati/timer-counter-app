import React, { Component } from "react";
import axios from "axios";
import apiHoc from "./HocApi";

class ApiCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ results: res }))
    //   .catch((err) => console.log(err));

       axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (

     <>
     {
      this.state.results.map((item)=>(
        <>
        <h1>{item.name}</h1>
        <h2>{item.username}</h2>
        
        </>
      ))
     }
     </>
    );
  }
}

export default apiHoc(ApiCalls,"https://jsonplaceholder.typicode.com/users");
