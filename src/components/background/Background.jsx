import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    background: {
        height: '100%',
        minHeight: '100vh',
        padding: '15px 0',
        background: props => props.color,
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: props => props.horizontalAlign,
        alignItems: props => props.verticalAlign
    }
})

export function Background(props) {

    const { children } = props
    const classes = useStyles(props)

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                {children}
            </div>
        </div>
    )
}

Background.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    horizontalAlign: PropTypes.oneOf(['center', 'start', 'end', 'space-around', 'space-between']),
    verticalAlign: PropTypes.oneOf(['center', 'start', 'end'])
}

Background.defaultProps = {
    children: '',
    color: '',
    horizontalAlign: 'center',
    verticalAlign: 'center'
}

export default Background
