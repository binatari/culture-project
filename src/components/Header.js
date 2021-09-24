import React from 'react'
import p from '../images/culture1.png' 
import Fade from 'react-reveal/Fade';


const Header = () => {
    return (
        <div className='heroBox'>
           <Fade top>
            <h1 className="headertext" data-scroll >Experience the story <br></br> of Nigeria </h1>
            </Fade>
            <p>Nigeria, is a country located on the western coast of Africa. Nigeria has a diverse geography, with climates ranging from arid to humid equatorial. However, Nigeria’s most diverse feature is its people. Hundreds of languages are spoken in the country, including Yoruba, Igbo, Fula, Hausa, Edo, Ibibio, Tiv, and English. The country has abundant natural resources, notably large deposits of petroleum and natural gas.
                The national capital is Abuja, in the Federal Capital Territory, which was created by decree in 1976. Lagos, the former capital, retains its standing as the country’s leading commercial and industrial city.
                </p>
          
            <img src={p} alt='culture' className='culture'/>
            
        </div>
    )
}

export default Header
