
import { useSprings, config } from 'react-spring'
import obj from "../images/obj.jpg"
import nnamdi from "../images/nnamdi.jpg"
import goodluck from "../images/goodluck.jpg"
import awolowo from "../images/Awolowo.jpg"
import Yaradua from "../images/YarAdua.jpg"
import { useState } from "react"
import Listitem from './Listitem'

const Parallax = () => {
    const data = [
    {

        id: 1,
        name: 'Obafemi\u00A0awolowo',
        image: `${awolowo}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tenure: "16 November 1904 - 11 May 1996"
    },
    {

        id: 2,
        name: 'Nnamdi\u00A0azikiwe ',
        image: `${nnamdi}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tenure: "6 March 1909 - 9 May 1987"
    },
    {

        id: 3,
        name: 'Olusegun\u00A0obasanjo',
        image: `${obj}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tenure: "5 March 1937 - present"
    },
    {

        id: 4,
        name: 'Umaru\u00A0musa\u00A0yar\u00A0adua',
        image: `${Yaradua}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tenure: "16 August 1951 - 5 May 2010"
    },
    {

        id: 5,
        name: 'Goodluck\u00A0jonathan',
        image: `${goodluck}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tenure: "20 November 1957 - present"
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
        <div data-scroll className='b'>
            <section className="c" data-scroll>
            <ul data-scroll>
            {
                data.map((item, i)=>(
                  <Listitem name={item.name} text={item.text} id={item.id} image={item.image} mouseIn={mouseIn} mouseOut={mouseOut} animate={anim[i]} key={item.id} tenure={item.tenure}/>
                ))
            }
             </ul>
            </section>
            
        </div>
    )
}

export default Parallax
