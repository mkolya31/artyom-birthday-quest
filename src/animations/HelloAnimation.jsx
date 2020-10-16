import React from 'react'

import Animation from '../components/animation/Animation'

import animation from './json/hello.json'

export default function HelloAnimation() {
    return (
        <Animation animationData={animation} />
    )
}
