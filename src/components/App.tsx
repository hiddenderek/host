import React, { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import { Route, Switch } from 'react-router-dom'
import MainArea from './MainArea'
import Banner from './Banner'
import ExpandedCard from './ExpandedCard'
import { setPageSize } from '../features/pageScroll/pageScroll-slice' 
function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', () => {
                dispatch(setPageSize({width: window.innerWidth, height: window.innerHeight}))
            })
        }
    }, [])
    return (
        <div className="appContainer">
            <Switch>
                <Route path="/home">
                    <Banner />
                    <MainArea />
                    <ExpandedCard/>
                </Route>
            </Switch>
        </div>
    )
}

export default App