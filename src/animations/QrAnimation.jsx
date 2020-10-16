import React from 'react'

import Animation from '../components/animation/Animation'

import animation from './json/qr.json'

export default function QrAnimation() {
    return (
        <Animation animationData={animation} />
    )
}
