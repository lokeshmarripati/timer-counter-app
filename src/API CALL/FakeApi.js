import React from "react";
import axios from "axios";

class ContactManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            ipName: '',
            ipEmail: '',
            ipNumber: '',
            statusMsg: '',
            editingId: null // Track which contact is being edited
        };
    }

    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts = () => {
        axios.get("http://localhost:3000/ContactDetails")
            .then((res) => this.setState({ contacts: res.data }))
            .catch((err) => console.error("Error fetching contacts:", err));
    }

    // handleChange = (e, keyword) => {
    //     this.setState({[ip${keyword.charAt(0).toUpperCase() + keyword.slice(1)}]:e.target.value });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const { ipName, ipEmail, ipNumber, editingId } = this.state;

        if (editingId) {
            // If an editingId is set, we're updating an existing contact
            axios.patch(`http://localhost:3001/contactdetails/${editingId}`, {
                cname: ipName,
                cemail: ipEmail,
                cno: ipNumber
            })
            .then(() => {
                this.setState({ statusMsg: "Contact successfully updated" });
                this.fetchContacts();
                this.resetForm();
            })
            .catch((err) => this.setState({ statusMsg: "An error occurred. Please try again." }));
        } else {
            // Otherwise, create a new contact
            axios.post("http://localhost:3001/contactdetails", {
                cname: ipName,
                cemail: ipEmail,
                cno: ipNumber
            })
            .then((res) => {
                this.setState((prevState) => ({
                    contacts: [...prevState.contacts, res.data],
                    statusMsg: "Contact successfully added"
                }));
                this.resetForm();
            })
            .catch((err) => this.setState({ statusMsg: "An error occurred. Please try again." }));
        }
    }

    handleUpdate = (id) => {
        const contact = this.state.contacts.find(c => c.id === id);
        this.setState({
            ipName: contact.cname,
            ipEmail: contact.cemail,
            ipNumber: contact.cno,
            editingId: id // Set the contact id to update
        });
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:3000/Contactetails/${id}`)
            .then(() => {
                this.setState({ statusMsg: "Contact successfully deleted" });
                this.fetchContacts();
            })
            .catch((err) => console.error("Error deleting contact:", err));
    }

    resetForm = () => {
        this.setState({
            ipName: '',
            ipEmail: '',
            ipNumber: '',
            editingId: null
        });
    }

    render() {
        const { contacts, ipName, ipEmail, ipNumber, statusMsg, editingId } = this.state;

        return (
            <>
                <form>
                    <div>
                        <label>
                            Contact Name:
                            <input
                                type="text"
                                value={ipName}
                                placeholder="Enter the name of the contact"
                                // onChange={(e) => this.handleChange(e, "name")}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Contact Email:
                            <input
                                type="email"
                                value={ipEmail}
                                placeholder="Email"
                                onChange={(e) => this.handleChange(e, "email")}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Contact Number:
                            <input
                                type="text"
                                value={ipNumber}
                                placeholder="Phone"
                                onChange={(e) => this.handleChange(e, "number")}
                            />
                        </label>
                    </div>
                    <button type="button" onClick={this.handleSubmit}>
                        {editingId ? "Update Contact" : "Create Contact"}
                    </button>
                </form>
                <p style={{ color: "red" }}>{statusMsg}</p>
                {contacts.map((item) => (
                    <div key={item.id}>
                        <h2>Name: {item.cname}</h2>
                        <p>Phone: {item.cno}</p>
                        <p>Email: {item.cemail}</p>
                        <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                        <button onClick={() => this.handleUpdate(item.id)}>update</button>
                        <hr />
                    </div>
                ))}
            </>
        );
    }
}

export default ContactManager;