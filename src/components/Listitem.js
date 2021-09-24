import { animated } from 'react-spring'

const Listitem = ({name, tenure, image, text, id, mouseIn, mouseOut, animate}) => {
    return (
        <>
            <li data-scroll className={`navigation-item navigation-item-${id}`} > 
                    <p className='navigation-link biglist'>
                      <span data-scroll data-scroll-speed='-2' data-text={name} onMouseOver={()=> mouseIn(id)} onMouseOut={()=> mouseOut()}>{name}</span>
                    </p>
                    <animated.div className="side" style={{...animate}}>
                    <span style={{color: 'rgb(219, 219, 219)', textAlign: 'center'}}>{tenure}</span>
                    <img src={image} alt='ran' />
                    </animated.div>
                  </li>
              
        </>
    )
}

export default Listitem
