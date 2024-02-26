import React from 'react'
import { Parallax } from 'react-parallax'

function ParallaxEffect() {


    return (
        <div>
            <Parallax bgImage="https://i.postimg.cc/3JGY5j3j/nature2.jpg" strength={500}>
                <div className="parallax-content">
                    <h1>A Symphony of Beauty and Harmony</h1>
                    <p> transformative experience that 
                        fosters understanding</p>
                </div>
            </Parallax>
            <div className='m-5 p-5 bg-light' style={{ color: "green" }}>
                <h1>The Enchanting Tapestry of Nature: A Symphony of Life and Harmony</h1>
                <p>Nature, with its boundless beauty and intricate design, weaves a tapestry
                    that captivates the human soul. It is a symphony of life, where every note
                    resonates with the melody of existence. From the towering mountains to the
                    smallest pebble on a riverbank, nature is a masterpiece that invites us to
                    explore its depths, marvel at its wonders, and contemplate the profound mysteries
                    it holds.</p>
            </div>
            <Parallax bgImage="https://i.postimg.cc/3JGY5j3j/nature2.jpg" strength={500}>
                <div className="parallax-content">
                    
                </div>
            </Parallax>
        </div>
    )
}

export default ParallaxEffect