import React, { Component } from 'react'
import "./Detail.scoped.css"
import moment from 'moment'

class Detail extends Component {
    state = {
        title: "",
        magnitude: "",
        time: "",
        status: "",
        tsunami: "",
        type: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id
        
        fetch("/sampleData.json")
            .then(data => data.json())
            .then(data => data.data.features.find(item => item.id == id))
            .then(item => {
                this.setState({
                    title: item.properties.title,
                    magnitude: item.properties.mag,
                    time: moment(item.properties.time).format('MMM DD YYYY, hh:mm A'),
                    status: item.properties.status,
                    tsunami: item.properties.tsunami,
                    type: item.properties.type
                })
            })
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <table><tbody>
                    <tr>
                        <th>Title</th>
                        <td>{this.state.title}</td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{this.state.magnitude}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{this.state.time}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{this.state.status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{this.state.tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{this.state.type}</td>
                    </tr>
                </tbody></table>
            </div>
        )
    }
}

export default Detail