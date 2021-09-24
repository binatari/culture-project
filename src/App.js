import Header from './components/Header';
import Particles from 'react-particles-js'
import Welcome from './components/Welcome';
import Cards from './components/Cards';
import Leaders from './components/Leaders';
import {useRef, useEffect} from 'react'
import Horizontal from './components/Horizontal';
import locomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './base.css';


gsap.registerPlugin(ScrollTrigger);
function App() {
	const containerRef = useRef(null)

	useEffect(()=> {
		const element= document.querySelector('#container');
		const scrolls = new locomotiveScroll({
			el: element, 
			smooth: true,
			touchMultiplier: 1,
    smartphone: {
        smooth: true,
        breakpoint: 200
    },
    tablet: {
        smooth: true,
        breakpoint: 1024
    },
		}) 

		scrolls.on("scroll", ScrollTrigger.update);

		ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
    return arguments.length
      ? scrolls.scrollTo(value, 0, 0)
      : scrolls.scroll.instance.scroll.y;
  },
  scrollLeft(value) {
    return arguments.length
      ? scrolls.scrollTo(value, 0, 0)
      : scrolls.scroll.instance.scroll.x;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: element.style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", ()=> scrolls.update())
ScrollTrigger.refresh()
		 
	})

  return (
   <main ref={containerRef} id="container">
	  <section data-scroll-container>
      <div data-scroll className='first'>
      <Particles
	   className="particlescontainer"
	   canvasClassName="particles"
      height="100vh"
      width="100vw"
      style={{position: 'absolute'}}
    params={{
	    "particles": {
	        "number": {
	            "value": 250,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
          "color": {
            "value" :"#0cae00"
          },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "random",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 3,
              "random": true
	        },
	        "opacity": {
            "value": 0.8,
            "random": true,
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
	 <Header />
  </div>
     
      <Welcome />
      <Cards />
	  <Horizontal />
	  <Leaders/>
	  </section>
	  </main>
  );
}

export default App;
