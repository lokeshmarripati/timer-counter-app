import React from "react";
import axios from "axios";
class ContactManager extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            contacts:[],
            ipName:'',
            ipEmail:'',
            ipNumber:'',
            statusMsg:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/ContactDetails").then((res)=>this.setState({contacts:res.data})).catch
        ((err)=>console.log("error"))
    }
    handleChange=(e,keyword)=>{
        if(keyword==="contactname"){
            this.setState({ipName:e.target.value})
        }
        else if(keyword==="contactemail"){
            this.setState({ipEmail:e.target.value})
        }
        else{
            this.setState({ipNumber:e.target.value})
        }

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.isUpdated){
            console.log(this.state.isId);
           axios.put(`http://localhost:3000/ContactDetails/${this.state.isId}`,
               { cname: this.state.ipName,
                cno: this.state.ipNumber,
                cemail: this.state.ipEmail
    
            }).then((res) => {
                const temp=this.state.contacts;
                const index=temp.findIndex((item)=>item.id===res.data.id)

                temp.splice(index,1,res.data);

                this.setState({ contacts: temp })
            }).catch((err) => this.setState({ statusMsg: "some error occurred please try again" }))
            this.setState({isUpdated:!(this.state.isUpdated)})
        }
          
        else{
            axios.post("http://localhost:3000/ContactDetails",{
            cname:this.state.ipName,
            cemail:this.state.ipEmail,
            cno:this.state.ipNumber
        }).then((res)=>{

            const temp = [...this.state.contacts,res.data]

            this.setState({contacts:temp});
            this.setState({statusMsg:"successfully added"})
        }).catch((err)=>this.setState({statusMsg:"some error occurred please try again"}))
      }
        
       
    }
    handleDelete=(e,keyid)=>{
        axios.delete(`http://localhost:3000/ContactDetails/${keyid}`).then((res)=>{
            //Deletion Using Filter Method
            const temp = this.state.contacts.filter((item)=>item.id !== keyid) 
            this.setState({contacts:temp});
            
}).catch((error)=>console.log(error))
}

handleUpdate=(e,keyid)=>{
   this.setState({isUpdated:!(this.state.isUpdated)})
   this.setState({isId:keyid})
}
    
    render(){
        return(   
    <>
    <form>
        Contact Name:<input type="text" placeholder="enter the name of the contact" onChange={(e)=>this.handleChange(e,"contactname")}></input>
        Contact Mail:<input type="text" placeholder="Email"onChange={(e)=>this.handleChange(e,"contactemail")} ></input>
        Contact Number:<input type="text" placeholder="Phone" onChange={(e)=>this.handleChange(e,"contactnumber")}></input>
        <button onClick={(e)=>this.handleSubmit(e)}>{(this.state.isUpdated)?"Update Contact":"Create Contact"}</button>

    </form>
    <p style={{color:"red"}}>{this.state.statusMsg}</p>
    {
        this.state.contacts.map((item)=>(
            <>
            <h2>Name :{item.cname}</h2>
            <p>Phone :{item.cno}</p>
            <p>Email :{item.cemail}</p>
            <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
            <button onClick={(e)=>this.handleUpdate(e,item.id)}>Update</button>
            <br></br>
            <hr></hr>
            </>
        ))
    }
    </>
        )
    }
}
export default ContactManager