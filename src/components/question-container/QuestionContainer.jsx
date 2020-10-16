import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

export const QuestionHead = (props) => {

    const { children } = props

    return (
        <Grid item xs={12}>
            <Container>
                {children}
            </Container>
        </Grid>
    )
}


export const QuestionTitle = (props) => {

    const { children } = props

    return (
        <Grid item xs={12}>
            {children}
        </Grid>
    )
}

export const QuestionBody = (props) => {

    const { children } = props

    return (
        <Grid item xs={12}>
            {children}
        </Grid>
    )
}

const useActionStyles = makeStyles({
    root: {
        textAlign: 'center',
        margin: '10px 0'
    }
})

export const QuestionActions = (props) => {

    const { children } = props
    const classes = useActionStyles()

    return (
        <Container className={classes.root} >
            <Grid item xs={12}>
                {children}
            </Grid>
        </Container>
    )
}

function QuestionContainer(props) {

    const { children } = props

    return (
        <Container>
            <Grid container>
                {children}
            </Grid>
        </Container>
    )
}

QuestionContainer.propTypes = {
    children: PropTypes.node
}

export default QuestionContainer

