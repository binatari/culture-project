import Fade from 'react-reveal/Fade';
const Card = ({Cardinfo}) => {
    return (
        <div>
            
           <div className={`inCards card-${Cardinfo.id}` } data-scroll>
           <Fade top delay={500} duration={1500} fraction={0.4}>
           <p className='right' data-scroll data-scroll-speed='2'><span>{Cardinfo.text}</span>{Cardinfo.paragraph}</p> 
           </Fade>
           <Fade top fraction={0.4}>
           <img data-scroll data-scroll-speed='4'  className='left' src={Cardinfo.source} alt={Cardinfo.alter}/>
           </Fade>
           </div>
        </div>
    )
}

export default Card
