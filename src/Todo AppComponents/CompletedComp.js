import React from 'react'
import _isEqual from "lodash/isEqual"

class StatusComp extends React.Component {
    constructor(props) {
        super(props)
    }

     shouldComponentUpdate(nextProps, nextState) {
        if (_isEqual(nextProps.prop1, this.props.prop1)) {
            return false
        } else {
            return true
        }
    }

    render() {

        return(
            <>
                <div class='left'>
                {console.log('completed comp')}

                    <h2>Completed Tasks</h2>
                    {
                        this.props.prop1.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <button onClick={()=>this.props.prop2(item.id)}>Pending</button>
                                <button onClick={()=> this.props.prop3(item.id)}>Trash</button>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default StatusComp