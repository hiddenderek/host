import React from "react"
import { Route, Switch, useLocation } from 'react-router-dom'
import MainArea from './MainArea'
import Banner from './Banner'
function App() {

    return (
        <div className = "appContainer">
            <Switch>
                <Route path="/home">
                    <Banner/>
                    <MainArea />
                </Route>
            </Switch>
        </div>
    )
}

export default App