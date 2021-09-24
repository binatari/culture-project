import Fade from 'react-reveal/Fade';

const History = ({heading, paragraph, image, alt}) => {
    return (
        <div className='infoblock'>
            <Fade top cascade> 
            <div data-scroll className='infoblock-text'>
            <h1>{
            heading.map((spans, i)=> (
                <span className={`headspan headspan${i}`} key={i}>{spans}</span>
            ))
            }</h1>
            <p data-scroll-direction="horizontal" >{paragraph}</p>
            </div>
            </Fade>
            <img data-scroll data-scroll-direction="horizontal" alt={alt} src={image}/>
        </div>
    )
}

export default History
