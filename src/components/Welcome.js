import React from 'react'
import Clip from './Clip'
import Titlebar from './Titlebar'
import Fade from 'react-reveal/Fade';
const Welcome = () => {
    return (
        <div className='welcome'>
          <Titlebar title='Welcome to Nigeria'/>  
          <Clip />
          <div className='overlay'>
            <Fade top>
          <p data-scroll  data-scroll-speed='-2'data-scroll-class='scroll-class'><span>Nigeria,</span> is a country located on the western coast of Africa. Nigeria has a diverse geography, with climates ranging from arid to humid equatorial. However, Nigeria’s most diverse feature is its people. Hundreds of languages are spoken in the country, including Yoruba, Igbo, Fula, Hausa, Edo, Ibibio, Tiv, and English. The country has abundant natural resources, notably large deposits of petroleum and natural gas.
                The national capital is Abuja, in the Federal Capital Territory, which was created by decree in 1976. Lagos, the former capital, retains its standing as the country’s leading commercial and industrial city.
          </p>
          </Fade>
          </div>
        </div>
    )
}

export default Welcome
