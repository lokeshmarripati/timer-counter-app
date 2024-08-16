import hocComponent from "./hocComponent";
import React from "react";
class ClothingCategory extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
  const {result,handleInput,handleSearch}=this.props
    return(
        <>
        <h1>Clothing Category</h1>
        <form>
       Enter product name you want to search <input type='text' onChange={(e)=>handleInput(e)} style={{border:'2px solid black',borderRadius:'3px', padding:'6px', margin:'5px'
       }}></input>
       <button onClick={(e)=>handleSearch(e)} style={{padding:"6px",cursor:"pointer",backgroundColor:"black",color:'white',borderRadius:'3px'}}>search</button>
        </form>
        <div  style={{ backgroundColor: 'red', color: 'white', border:'2px solid black', borderRadius:'4px' }}>
            {result.map((item)=>(
                <>
                <h2>Product name:{item.pName}</h2>
                <p>Price :{item.price}</p>
                <p>Manufacturer:{item.manufacturer}</p>
                <p>Expected Delivery by :{item.expectedDelivery}</p>
                </>
            ))}
        </div>

        </>
    )
  }
}
export default hocComponent(ClothingCategory)