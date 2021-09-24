import React from 'react'

const Test = ({text, paragraph, source, alter}) => {
    return (
        <div>
            <div className='inCards'>
           <p className='right'><h2>{text}</h2>{paragraph}</p> 
           <img className='left' src={source} alt={alter}/>
           </div>
        </div>
    )
}

export default Test
