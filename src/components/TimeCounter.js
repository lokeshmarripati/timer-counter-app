import React from "react";
class Timecounter extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
        minutes: 10,
        seconds: 0,
      };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
          if (this.state.seconds > 0) {
            this.setState({ seconds: this.state.seconds - 1 });
          } else if (this.state.minutes > 0) {
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
          } else {
            clearInterval(this.interval);
          }
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      render() {
        return (
          <div>
            <h1>
              {this.state.minutes}:{this.state.seconds < 10 ? '0' : ''}{this.state.seconds}
            </h1>
          </div>
        );
      }
}
export default Timecounter;
  