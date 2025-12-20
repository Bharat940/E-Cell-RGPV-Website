import React from 'react'
import Image from "next/image";

function WhoWeAre() {
    return (
        <div className='flex items-center justify-center mt-16 sm:mt-20 md:mt-24 relative bg-gradient-to-d from-[#0f0b28] to-[#16103c]'>
            {/* Background Image - Right aligned, fully visible */}
            <div className="absolute right-0 top-0 h-full w-full sm:w-5/8 lg:w-3/8 pointer-events-none z-[0]">
                <Image
                    src="/assets/About-sidebg.png"
                    alt="Who we are Background"
                    fill
                    className="object-contain object-right opacity-70"
                    priority
                    style={{ objectFit: 'contain', objectPosition: 'right center' }}
                />
            </div>
            <div className='flex items-center justify-center text-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 max-w-4xl 2xl:max-w-6xl w-full pb-8 sm:pb-12 md:pb-16 mb-0'>
                <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                    <div className="w-fit p-2 px-4 rounded-full border-1 border-[#4D2F8C] bg-gradient-to-r from-[#c3b3e6] to-[#f0ecf9] text-transparent bg-clip-text text-center text-sm sm:text-base">E-Cell RGPV</div>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-2 sm:mt-3">Who We Are</h1>
                    <p className="mt-4 sm:mt-5 md:mt-6 mb-0 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4">
                        The Entrepreneurship Cell of RGPV, also known as E-cell RGPV has been established with the vision to inculcate the passion and spirit among students to pursue entrepreneurship. We not only provide the budding entrepreneurs with a platform to convert their dreams into reality but also help them to get insight into the entrepreneurial theory and practice through activities and workshops.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre

