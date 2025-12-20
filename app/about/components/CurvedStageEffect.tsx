import React from 'react'
import Image from 'next/image'

function CurvedStageEffect() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* E-Cell Event Image - Centered and Responsive */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ml-2 sm:ml-4 md:ml-6">
          <Image
            src="/assets/aboutE-Cell.png"
            alt="image of E-Cell event"
            width={564}
            height={389}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Background Image - Desktop */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden hidden sm:block">
        <Image
          src="/assets/curvedStage.png"
          alt="Curved stage effect"
          fill
          className="opacity-80 object-cover object-[calc(50%+20px)_center]"
          priority
        />
      </div>

      {/* Background Image - Mobile */}
      <div className="relative w-full h-[80px] sm:h-[100px] overflow-hidden sm:hidden">
        <Image
          src="/assets/adventures_top.png"
          alt="curved effect"
          fill
          className="opacity-80 object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}

export default CurvedStageEffect

