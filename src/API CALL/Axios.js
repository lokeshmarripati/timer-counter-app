import axios from 'axios'

import axioshoc from './hocAxios';
import {Component} from 'react'
//import axioshoc from './Hoc/axioshoc';
class Axios extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     result: [],
        //     search: ""

        // }

    }
    // componentDidMount(){
    //     axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res)=>console.log(res)).catch((err)=>console.log(err))
    // }
    // userInput(e) {
    //     this.setState({ search: e.target.value })
    // }
    // handleSearch(e) {
    //     e.preventDefault()
    //     axios.get(https://hn.algolia.com/api/v1/search?query=${this.state.search}).then((res) => this.setState({ result: res.data.hits })).catch((err) => console.log(err))
    // }
    render() {
        const {userInput,handleSearch,result}=this.props
        return (

            <div>

                <h1 >search anything</h1>
                <div>
                    <input type="text" onChange={(e) => userInput(e)} />
                    <button onClick={(e) =>handleSearch(e)}>search</button>
                </div>
                {
                    result.map((item) => (

                        <div>
                            <h1 className="head">author: {item.author}</h1>
                            <h1 className="text">title: {item.title} </h1>
                            {/* {console.log(item.title)} */}
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default axioshoc(Axios);