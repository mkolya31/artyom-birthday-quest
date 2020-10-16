import React from 'react'
import PropTypes from 'prop-types'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        background: props => props.background
    }
})

export function QuestContainer(props) {

    const { children } = props
    const classes = useStyles(props)

    return (
        <Container className={classes.root}>
            {children}
        </Container>
    )
}

QuestContainer.propTypes = {
    children: PropTypes.element,
    background: PropTypes.string
}

export default QuestContainer
