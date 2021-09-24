
import Card from './Card'
import Titlebar from './Titlebar'
import hausa from '../images/hausa.jpg'
import yoruba from '../images/yoruba.jpg'
import igbo from '../images/igbo.jpg'

const Cards = () => {
   

    const infos = [
        {
            id: 1, 
            paragraph: 'The northern-dwelling Hausa, one of the most numerous groups in the country, have become integrated with the smaller Fulani group, whose members conquered Hausaland in the early 19th century; the great majority of both are Muslims. Town-dwelling Fulani intermarry freely with the Hausa and other groups, and they continue to control the administration of the Hausa towns. The cattle-herding rural Fulani, who generally do not intermarry, speak the Fulani language, Fula, rather than Hausa.',
            alter: 'Hausa',
            source: `${hausa}`,
            text:'THE HAUSAS'
        },
    
        {
            id: 2, 
            paragraph: 'Another large and politically dominant group is the Yoruba of southwestern Nigeria. They consider the city of Ile-Ife their ancestral home and the deity Oduduwa their progenitor. Most Yoruba are farmers but live in urban areas away from their rural farmland. Each Yoruba subgroup is ruled by a paramount chief, or oba, who is usually supported by a council of chiefs. The ooni (oni) of Ile-Ife, who is the spiritual leader of the Yoruba, and the alaafin (alafin) of Oyo, who is their traditional political leader, are the most powerful rulers, and their influence is still acknowledged throughout the Yoruba areas.',
            alter: 'Yoruba',
            source: `${yoruba}`,
            text:'THE YORUBAS'
        },
    
        {
            id: 3, 
            paragraph: 'The third major ethnic group, the Igbo of southeastern Nigeria, lives in small decentralized and democratic settlements. The largest political unit is the village, which is ruled by a council of elders (chosen by merit, not heredity) rather than by a chief. A smaller proportion live in large towns and are culturally much closer to the Edo of neighbouring Benin City (in Edo state) than to the Igbo east of the lower Niger valley.',
            alter: 'igbo',
            source: `${igbo}`,
            text:'THE IGBOS '
        },
    ]

    return (
        <div className = 'tribes' id='tribe'>
             <Titlebar title= 'Three major ethnic groups'/>
            {infos.map((info) => (
                <Card key ={info.id} Cardinfo={info}/>
                ))}
        </div>
    )
}

export default Cards
