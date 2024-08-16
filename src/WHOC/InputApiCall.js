import React, { Component } from "react";
import axios from "axios";

class FakeApiPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contacts:[],
      name: "",
      username: "",
     number:"",
     
    };
  }

  // Handle input change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, username } = this.state;

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        username,
      })
      .then((res) => {
        this.setState({ response: res.data, error: null });
      })
      .catch((err) => {
        this.setState({ error: err.message, response: null });
      });
  };

  // Lifecycle method to handle side effects if needed
  componentDidMount() {
    // You can trigger some initial data fetch or actions here if required
  }

  render() {
    const { name, username, response, error } = this.state;

    return (
      <div>
        <h1>Fake API POST Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {response && (
          <div>
            <h2>Response from Fake API:</h2>
            <p>Name: {response.name}</p>
            <p>Username: {response.username}</p>
            <p>ID: {response.id}</p> {/* The API typically returns an ID */}
          </div>
        )}

        {error && (
          <div>
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FakeApiPost;
