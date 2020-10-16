import React from 'react'
import { makeStyles } from '@material-ui/core'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Background from './components/background/Background'
import WelcomePage from './pages/welcome-page/WelcomePage'
import FirstQuestion from './pages/question-1/FirstQuestion'

const useStyles = makeStyles({
    root: {
        width: '100vw',
        minHeight: '100vh',
    }
})

function App() {

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route path="/question-1">
                        <FirstQuestion />
                    </Route>
                    <Route path="/part2">
                        <Background color="yellow" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
