import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
// import Instagram from '../components/Offers';
import Link from 'next/link'
import  Person  from '../interfaces'
import Footer from '../components/Footer'
import Comments from '../components/Comments'
import useSWR from 'swr'
import PersonComponent from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())



export default function Home({ text, p }) {
  const router = useRouter()
  const id = router.query.id
  const { data, error, isLoading } = useSWR('/api/people', fetcher)
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null
 
  return (
    <>
      <div>
     
        <Head>
          <title>Hotel Toni Llogora</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div></div>
        <Hero
          heading="MIRËSEVINI TE HOTEL TONI "
          message="Lart mbi det.. Poshte nen qiell.  "
          description="Jeni i ftuar të përjetoni dhe të shijoni momente të pazakonta në mes te natyres, aty ku mysafirët ndihen si në shtëpi në dhomat ne mes te pishave te Llogorase."
        />

        <Comments>
        {/* <h1>Dhoma: {id}</h1>
          <ul>
            <li>
              <Link href={`/post/${id}/first-comment`}>First comment</Link>
            </li>
      </ul> */}

{/* 
      <ul>
        {data.map((p) => (
          <PersonComponent key={p.id} person={p} />
        ))}
      </ul> */}
    

      
        </Comments>
        <Footer />
      </div>
    </>
  )
}
