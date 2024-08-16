import React from "react";
import _isEqual from "lodash/isEqual"
class Delete extends React.Component{
    constructor(props) {
        super(props);
        
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        if (_isEqual(nextProps.prop1, this.props.prop1)) {
            return false
        } else {
            return true
        }
    }
    
      render() {
        return (
          <div>
            <h1>Delete Tasks</h1>
            {this.state.props.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button onClick={() => this.props.prop4.handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        );
      }
}
export default Delete;