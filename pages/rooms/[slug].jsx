
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { useCallback, useEffect } from 'react'


// export default function RoomsId() {
//   const router = useRouter()
//   const { slug } = router.query;
//   console.log(slug)


//   const listName = [{
//     name: "ali", 
//     age: 38,
//     state: "sweden"
//   }]

  

//   return (
//     <>
//       <button onClick={() => router.push('/rooms/:slug')}></button>
      
//         {listName.map((listNames)=>(

//        <div key= {listNames}>
//          <h1>{listNames.name}</h1>
//          <h2>{listNames.age}</h2>
        
//        </div>


       

//         ))}



    

  

    
//     </>
//   )


  
// }

import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
 
export default function Rooms() {
  const router = useRouter()
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
 
    fetch('/api/rooms/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        /* Form data */
      }),
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router.push('/api/rooms')
    })
  }, [])
 
  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/api/rooms')
  }, [router])
 
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
    </form>
  )
}
 