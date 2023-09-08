import React ,{useState, useEffect} from 'react'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero'
import { VoiceListInstance } from 'twilio/lib/rest/pricing/v1/voice';
import HostedNumbers from 'twilio/lib/rest/preview/HostedNumbers';




export default function Votat() {
  const [votes, setVotes] = useState([]);
  const [rate, setRate] = useState()

  const addRate =()=>{
    setRate([
      ...rate,
      {
        name:ali,
      }
    ])
  }
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
   {votes.map((vote) => (
            <article key={vote._id} className="flex max-w-xl flex-col items-start justify-between">
                 <div className="group relative">

              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={vote.data} className="text-gray-500">
                  {vote.date}
                </time>
                <a
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {vote.message}
                </a>
              </div>
           
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={vote.avtar} alt="" className="h-10 w-10 rounded-full bg-gray-500" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={vote.avtar}>
                      <span className="absolute inset-0" />
                      {vote.name} <br/> {vote.country}
                    </a>
                  </p>
                 
                </div>
              </div>
            </article>
          ))}
          <button className="btn btn-primary" onClick={addRate}>button</button>
   </div>
    </>
  )
}
