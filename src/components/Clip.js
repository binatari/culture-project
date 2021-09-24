import ReactPlayer from 'react-player'
import Nigeria from "./n.mp4"
const Clip = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            playing  = {true}
            url= {Nigeria}
            width='100%'
            height='100%'
            loop = {true}
/>
        </div>
    )
}

export default Clip
