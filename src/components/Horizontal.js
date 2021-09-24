import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import History from './History';
import {useRef, useEffect} from 'react';
import army from '../images/Army.jpg'
import lugard from '../images/lugardpic.png'
import nok from '../images/nok.jpg'
import independence from '../images/independence.jpg'


const Horizontal = () => {
  const infoBlock = [
    { 
      id: 1,
      heading: ['The', 'Nok', 'culture'],
      paragraph:'Evidence of human occupation in Nigeria dates back thousands of years. The oldest fossil remains found by archaeologists in the southwestern area of Iwo Eleru, near Akure, have been dated to about 9000 BCE. There are isolated collections of ancient tools  and artifacts of different periods of the Stone Age, but the oldest recognizable evidence of an organized society belongs to the Nok culture (c. 500 BCE–c. 200 CE).Distinctive features of Nok art include naturalism, stylized treatment of the mouth and eyes, relative proportions of the human head, body, and feet, distortions of the human facial features, and treatment of animal forms. The spread of Nok-type figures in a wide area south of the Jos Plateau, covering southern Kaduna state southeastward to Katsina Ala, south of the Benue River, suggests a well-established culture that left traces still identifiable in the lives of the peoples of the area today.',
      image: `${nok}`,
      alt: 'NOK'
    },

    {
      id: 2,
      heading: ['ARRIVAL', 'OF', 'THE', 'BRITISH'],
      paragraph: 'Nigeria became a British protectorate in 1901, but had been remotely managed from sierra Leone by british officials,  in 1886 Lagos became a separate colony after years of remote management, a consul was maintained at Fernando po to oversee the lucrative palm oil trade in the region.  ',
      image: `${lugard}`,
      alt: 'ARRIVAL OF THE BRITISH'
    },

    {
      id: 3,
      heading: ['NIGERIAN', 'INDEPENDENCE'],
      paragraph: 'Nigeria was granted independence on October 1, 1960. A new constitution established a federal system with an elected prime minister and a ceremonial head of state. The NCNC, now headed by Azikiwe (who had taken control after Macaulay’s death in 1946), formed a coalition with Balewa’s NPC after neither party won a majority in the 1959 elections. Balewa continued to serve as the prime minister, a position he had held since 1957, while Azikiwe took the largely ceremonial position of president of the Senate. Following a UN-supervised referendum, the northern part of the Trust Territory of the Cameroons joined the Northern region in June 1961, while in October the Southern Cameroons united with Cameroun to form the Federal Republic of Cameroon. On October 1, 1963, Nigeria became a republic. Azikiwe became president of the country, although as prime minister Balewa was still more powerful.',
      image: `${independence}`,
      alt: 'INDEPENDENCE' 
    },

    {
      id: 4,
      heading: ['THE','BIAFRAN','WAR'],
      paragraph: 'On May 30, 1967, Ojukwu declared the secession of the three states of the Eastern region under the name of the Republic of Biafra, which the federal government interpreted as an act of rebellion. Fighting broke out in early July and within weeks had escalated into a full-scale civil war. The next two years were marked by stiff resistance in the shrinking Biafran enclave and by heavy casualties among civilians as well as in both armies, all set within what threatened to be a military stalemate. The final Biafran collapse began on December 24, 1969, when federal troops launched a massive effort at a time when Biafra was short on ammunition, its people were desperate for food, and its leaders controlled only one-sixth of the territory that had formed the Biafran republic in 1967. Ojukwu fled to Côte d’Ivoire on January 11, 1970, and a Biafran deputation formally surrendered in Lagos four days later.',
      image: `${army}`,
      alt: 'the biafran war'
    }
  ]
  const objectRef = useRef(null);
  const horizontalRef = useRef(null);
  const digRef = useRef(null);
  
    useEffect(()=> {
      window.addEventListener("load", function(){
        let totalWidth = 0;
        let element = digRef.current;
      let elementWidth = element.querySelectorAll("#objectref > *");//get the combined width of all the direct child elements  in the div
      elementWidth.forEach(item=>  totalWidth += item.offsetWidth )
      let container = document.querySelector("#container");
      let ScrollLength = totalWidth - window.innerWidth;
      let horizontalScrollLength = ScrollLength 
      gsap.to("#objectref", {
        scrollTrigger: {
          scroller: container, //locomotive-scroll
          scrub: true,
          trigger: element.querySelector("#horizontalRef"),
          pin: true,
          // anticipatePin: 1,
          start: "top top",
          end: totalWidth
        },
        x: -horizontalScrollLength,//+450
        ease: "none"
      });
      ScrollTrigger.refresh();
      })
      
     
    }, [] )
    
    return (
      <div className="dig" ref={digRef} >
   <section className="horizontal" ref={horizontalRef} id="horizontalRef">
     <main className="pin-wrap" ref={objectRef} id="objectref" >
     {
       infoBlock.map(info => (
       <History heading={info.heading} paragraph={info.paragraph} image={info.image} alt={info.alt} key={info.id}/>
       )
       )
     }
  </main>
    </section>
    </div>
    )
}

export default Horizontal
