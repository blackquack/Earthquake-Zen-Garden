import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Home.scoped.css'

class Home extends Component {
    state = {
        title: "",
        items: [],
        sortHeader: {
            title: false,
            magnitude: false,
            time: false
        },
        sortedHeaderIcon: {
            title: false,
            magnitude: false,
            time: false
        }
    }

    componentDidMount() {
        fetch("/sampleData.json")
            .then(data => data.json())
            .then(data => data.data)
            .then(data => {
                this.setState({
                    title: data.metadata.title,
                    items: data.features.map(item => { return {"id": item.id, title: item.properties.place, magnitude: item.properties.mag, time: moment(item.properties.time).format('MMM DD YYYY, hh:mm A') }})
                })
            })
        
    }

    sortProperty = (propertyName) => {
        const sortedItems = this.state.items.sort((item1, item2) => {
            if (item1[propertyName] < item2[propertyName] || this.state.sortHeader[propertyName]) return -1
            return 1
        })

        const invertedSortedHeader = !this.state.sortHeader[propertyName]

        let sortHeader =  { title: false, magnitude: false, time: false }
        let sortedHeaderIcon =  {...sortHeader}

        sortHeader[propertyName] = invertedSortedHeader
        sortedHeaderIcon[propertyName] = true

        this.setState({
            items: sortedItems,
            sortHeader,
            sortedHeaderIcon
        })
    }

    renderSortedIcon = (propertyName) => {
        if (this.state.sortedHeaderIcon[propertyName]) {
            return this.state.sortHeader[propertyName] ? "▼" : "▲"
        }
        return ""
    }

    render() {
        const tableRows = this.state.items.map(item => {
            return (
                <tr key={item.id}>
                    <td><Link to={"/detail/" + item.id}>{item.title}</Link></td>
                    <td>{item.magnitude}</td>
                    <td>{item.time}</td>
                </tr>
            )
        })

        return (
            <div>
                <h3>{this.state.title}</h3>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.sortProperty("title")}>Title {this.renderSortedIcon("title")}</th>
                            <th onClick={() => this.sortProperty("magnitude")}>Magnitude {this.renderSortedIcon("magnitude")}</th>
                            <th onClick={() => this.sortProperty("time")}>Time {this.renderSortedIcon("time")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home