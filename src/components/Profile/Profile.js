import React, { Component } from 'react'
import './Profile.scoped.css'

class Profile extends Component {
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        bio: "",
        avatarImage: ""
    }

    componentDidMount() {
        fetch("./sampleData.json")
            .then(data => data.json())
            .then(data => data.profile)
            .then(profile => {
                this.setState({...profile})
            })
    }
    

    render () {
        return (
            <div id="profileRenderContainer">
                <h3>Profile</h3>
                <div id="profileContainer">
                    <img src={this.state.avatarImage} width="200" height="200" />
                    <table><tbody>
                        <tr>
                            <th>First name</th>
                            <td>{this.state.firstName}</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td>{this.state.lastName}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{this.state.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <th>Bio</th>
                            <td>{this.state.bio}</td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        )
    }
}

export default Profile