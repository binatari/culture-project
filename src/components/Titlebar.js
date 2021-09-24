import React from 'react'
import Fade from 'react-reveal/Fade';
const Titlebar = ({title}) => {
    return (
        <div data-scroll  data-scroll-sticky className = 'titlebar' >
            <Fade top>
            <h2><span>#</span> {title}</h2>
            </Fade>
        </div>
    )
}

export default Titlebar
