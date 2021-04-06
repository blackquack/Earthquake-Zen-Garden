import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import './App.css'

class App extends Component {
    // componentDidMount() {
    //     fetch("/sampleData.json")
    //         .then(data => data.json())
    //         .then(data => console.log(data))
    // }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        )
    }
}

export default App