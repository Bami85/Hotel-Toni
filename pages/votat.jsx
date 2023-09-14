import React ,{useState, useEffect} from 'react'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero';




export default function Votat() {
  const [votes, setVotes] = useState([]);
  const stars = [4, 5, 3, 5, 5];
  const finThree = stars.find((star)=>star > 3 )
  console.log(finThree);

  
  useEffect(() => {
    const fetchDataHandler = async () => {
      try {
        const response = await fetch('api/votes');
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av data.');
        }
        const data = await response.json();
        setVotes(data.data);
        console.log(data);
      } catch (error) {
        console.error(error);
    
      }
    };

    fetchDataHandler();

  }, []); 
  return (
    <>
    <div>
        <Hero/>
        <Portfolio heading='Restaurant comming soon' message='Kto jan disa nga ushqimet qe mund te porosisni ne restorant Noeli' />

    </div>
    <div>
     <h1>{finThree}</h1>
      
    </div>
 
   
  
  

    </>
  )
}

