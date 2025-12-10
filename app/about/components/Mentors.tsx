import React from 'react'
import Image from "next/image"
function Mentors() {
  return (
    <div className="flex items-center justify-center mt-16 bg-gradient-to-b from-[#0f0b28] to-[#020014] ">

      <div className="px-8 sm:px-20">
        <Image src="/assets/mentors.png" alt="Mentors" width={1000} height={600} className="mb-24" />
      </div>
    </div>
  )
}

export default Mentors
