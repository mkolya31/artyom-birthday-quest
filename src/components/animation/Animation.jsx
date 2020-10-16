import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'lottie-react-web'

function Animation(props) {

    const { animationData } = props

    return (
        <Lottie
            options={{
                animationData
            }}
        />
    )
}

Animation.propTypes = {
    animationData: PropTypes.object.isRequired
}

export default Animation
