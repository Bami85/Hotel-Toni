
'use client'
import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"



export default function Logo() {
    const router = useRouter();
  return (
    <div>
        <Image
        alt = "Logo"
        className= "hidden md:block cursor-poiner"
        height = "100"
        width = "100"
        src = "/images/logo.png"

        />
      
    </div>
  )
}
