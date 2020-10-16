import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import QuestContainer from './components/QuestContainer'

function App() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <QuestContainer background="green" />
                    </Route>
                    <Route path="/part1">
                        <QuestContainer background="blue" />
                    </Route>
                    <Route path="/part2">
                        <QuestContainer background="yellow" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
