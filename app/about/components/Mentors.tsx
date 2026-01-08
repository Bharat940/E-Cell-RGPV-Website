'use client'
import React from 'react'
import Image from "next/image"

function Mentors() {
  const mentors = [
    {
      name: "Dr. Shikha Agrawal",
      position: "Director, TNP",
      image: "/assets/ShikhaAgrawal.png"
    },
    {
      name: "Dr. Rajeev Tripathi",
      position: "Vice Chancellor, RGPV",
      image: "/assets/RajeevTripathi.png"
    },
    {
      name: "Dr. Mohan Sen",
      position: "Registrar, RGPV",
      image: "/assets/MohanSen.png"
    }
  ]

  return (
    <div className="relative flex flex-col items-center justify-center py-24 sm:py-28 lg:py-36 min-h-screen">
      {/* Background image - visible on desktop only */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none px-16 md:px-20 lg:px-32 xl:px-40"
        style={{
          backgroundImage: "url('/assets/Mentor-bg.png')",
          backgroundSize: "90%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-10 sm:mb-12 lg:mb-16 text-center relative z-10">
        Our Mentors
      </h2>

      {/* Mentors Cards Container */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-6 max-w-7xl w-full relative z-10 px-4 lg:px-0">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="mentor-card flex flex-col items-center justify-center p-6 sm:p-8 w-full lg:w-auto max-w-[calc(100%-32px)] md:max-w-[400px] lg:max-w-[350px]"
            style={{
              minWidth: "280px"
            }}
          >
            {/* Mentor Image */}
            <div className="mb-4 overflow-hidden rounded-3xl w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={288}
                height={288}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Mentor Name */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
              {mentor.name}
            </h3>

            {/* Mentor Position */}
            <div
              className="flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%), rgba(147, 130, 255, 0.01)',
                boxShadow: 'inset 0px 0px 12px rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p className="text-xs sm:text-sm lg:text-base text-white font-medium text-center">
                {mentor.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile and tablet card backgrounds */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .mentor-card {
            background-image: url('/assets/Mentor-bg.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 24px;
          }
        }
      `}</style>
    </div>
  )
}

export default Mentors
