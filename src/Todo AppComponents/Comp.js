import React from 'react'
import PendingComp from './PendingComp';
import CompletedComp from './CompletedComp'
import ArchieveComp from './ArchieveComp';
// import DeleteComponents from './DeleteComponents';

class TaskChange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[]
        }
    }

    static getDerivedStateFromProps(props,state) {
        return {todos:props.data}
    }

    getPendingStatus = (todoId) => {
        const pendingItems = this.state.todos.filter(item => item.status === false && item.active === true)
        return pendingItems
    }

    getCompletedStatus = (todoId) => {
        const completedItems = this.state.todos.filter(item => item.status === true && item.active === true)
        return completedItems
    }

    getArchieveItems = () => {
        const archievedItems = this.state.todos.filter(item => item.active === false)
        return archievedItems
    }

    changeCompletionStatus=(todoId)=>{
        const temp=this.state.todos
        const obj=temp.find((item) => item.id === todoId)
        console.log(obj)
        obj.status=!obj.status
        console.log(obj)
        this.setState({todos:temp})
    }

    changeActiveStatus = (todoId) => {
        const objs = this.state.todos
        const activeObj = objs.find((item) => item.id === todoId)
        // console.log(activeObj)
        activeObj.active = !activeObj.active
        this.setState({todos:objs})
    } 

    // deleteUser = (id) => {
    //     this.setState({
    //       users: this.state.todos.filter((todos) => (link unavailable) !== id),
    //     });
    // };
    handleDelete = (todoId) => {

        const filteredData = this.state.todos.filter(item => item.id !== todoId);
        this.setState({ todos: filteredData });
      }

    render() {
        return(
            <>
                <PendingComp prop1={this.getPendingStatus()} prop2={this.changeCompletionStatus} prop3 = {this.changeActiveStatus} prop4={this.handleDelete}></PendingComp>
                
                <CompletedComp prop1={this.getCompletedStatus()} prop2={this.changeCompletionStatus} prop3 = {this.changeActiveStatus}prop4={this.handleDelete}></CompletedComp>

                <ArchieveComp prop1={this.getArchieveItems()} prop3 = {this.changeActiveStatus}prop4={this.handleDelete}></ArchieveComp>
                <DeleteComponents prop4={this.handleDelete}></DeleteComponents>

            </>
        )
    }
}

export default TaskChange