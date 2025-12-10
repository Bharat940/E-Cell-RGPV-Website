import React from 'react'
import Image from 'next/image'
function CurvedStageEffect() {
  return (
    <div>
      <section
        className="relative w-full overflow-hidden"
      >
        {/* Background Image */}
        <div className="relative w-full h-[350px] overflow-hidden hidden sm:block ">
          <Image
            src="/assets/curvedStage.png"
            alt="Curved stage effect"
            fill
            className="opacity-80 object-cover object-[calc(50%+20px)_center]"
            priority
          />
        </div>
        <div className="relative w-full h-[100px] mt-10 overflow-hidden  sm:hidden ">
          <Image
            src="/assets/adventures_top.png"
            alt="curved effect"
            fill
            className="opacity-80 object-cover object-center"
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default CurvedStageEffect
