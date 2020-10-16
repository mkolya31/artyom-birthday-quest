import React from 'react'

import Animation from '../components/animation/Animation'

import animation from './json/senya.json'

export default function SenyaAnimation() {
    return (
        <Animation animationData={animation} />
    )
}
