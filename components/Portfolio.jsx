import React, { useState, useEffect } from 'react';


export default function Votat() {
  const [votes, setVotes] = useState([]);

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
  const addReview = (newReview) => {
    setVotes([...votes, newReview]);
  };

  return (
    <>
    {/* /tailwindcss */}
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mx-auto max-w-2xl text-center font-bold  ">Komente nga bokning</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        </div>
      </div>
  
    </>
  );
}





