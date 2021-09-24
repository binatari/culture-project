
import { useSprings, animated, config } from 'react-spring'
import Lugard from "./Lugard.jpg"
import { useState } from "react"

const List = () => {
    const data = [
    {

        id: 1,
        name: 'Obafemi\u00A0awolowo',
        image: `${Lugard}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {

        id: 2,
        name: 'Nnamdi\u00A0azikiwe ',
        image: `${Lugard}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {

        id: 3,
        name: 'Olusegun\u00A0obasanjo',
        image: `${Lugard}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {

        id: 4,
        name: 'Umaru\u00A0musa\u00A0yar\u00A0adua',
        image: `${Lugard}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {

        id: 5,
        name: 'Goodluck\u00A0jonathan',
        image: `${Lugard}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
]
    const [control, setControl] = useState(null)

    const mouseIn = (id) => {
        setControl(id)
    }

    const mouseOut = () => {
        setControl(null)
    }

    //setting  an index as a state and mapping over the data used
      const anim = useSprings(
          data.length,
          data.map((item, i) => ({
             to: control === i + 1 ? {opacity: 1, x: 50}: {opacity: 0, x: 0},
             config: config.slow
          }))
      )
       
    return ( 
        <div data-scroll className='navigation-wrapper'>
            <section className="project-preview-wrapper" data-scroll>
            <ul data-scroll>
            {
                data.map((item, i)=>(
                    <li data-scroll className="navigation-item" key={item.id} > 
                    <p className='navigation-link biglist'onMouseOver={()=> mouseIn(item.id)} onMouseOut={()=> mouseOut()}>
                      <span data-text={item.name}>{item.name}</span>
                    </p>
                    <animated.div className="side" style={{...anim[i]}}>
                    <span style={{color: 'rgb(219, 219, 219)', textAlign: 'center'}}>1964 - 1972</span>
                    <img src={item.image} alt='ran' />
                    <p>{item.text}</p>
                    </animated.div>
                  </li>
                ))
            }
             </ul>
            </section>
            
        </div>
    )
}

export default List
