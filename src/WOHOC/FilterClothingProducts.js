import React from "react";
import {result} from "lodash";

class FilterClothingProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            products:[],
            searchItem:''
        }
    }
    static getDerivedStateFromProps(props,state){
        return{products:props.data}

    }
    handleInput=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSearch=(e)=>{
        e.preventDefault()
        const resultArray=this.state.products.filter((item)=>item.pName===this.state.searchItem)
        this.setState({result:resultArray})
    }
    render(){
       { console.log(this.state.result)}
        return(
            <>
            <h1>Clothing Category</h1>
            <form>
            Enter ur Search Item <input type="text" onChange={(e)=>this.handleInput(e)}></input>
            <button onClick={(e)=>this.handleSearch(e)}>Submit</button>
            </form>

            <div>
                {this.state.result.map((item)=>(
                    <>
                    <h2>Product Name:{item.pName}</h2>
                    <p>Price:{item.price}</p>
                    <p>Manufacturer:{item.manufacturer}</p>
                    <p>ExpectedDelivery:{item.expectedDelivery}</p>
                    </>
                ))}
            </div>
            </>
        )
    }
}
export default FilterClothingProducts;