import React from "react";
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        { id: 0, Name: "Lokesh", Roles: "Software", salary: 30000 },
        { id: 1, Name: "John", Roles: "Manager", salary: 50000 },
        { id: 2, Name: "Alice", Roles: "Designer", salary: 40000 },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.user.map((user)=>(
            <diV>
             <h1>Name:{user.Name}</h1>
            <h1> Roles:{user.Roles}</h1>
            <h1>Salary:{user.salary}</h1>
            <hr></hr>
            </diV>
           
        ))}

      </>
    );
  }
}
export default UserData;
