import React from 'react'
import Image from "next/image";

function WhoWeAre() {
    return (
        <div className='flex items-center justify-center mt-24 relative bg-gradient-to-d  from-[#0f0b28] to-[#16103c]'>
            {/* Background Image - Left aligned, fully visible */}
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
            <div className='flex items-center justify-center text-center  -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 max-w-4xl 2xl:max-w-6xl w-full pb-0 mb-0'>
                <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0">
                    <div className="w-fit p-2 px-4 rounded-full border-1 border-[#4D2F8C] bg-gradient-to-r from-[#c3b3e6] to-[#f0ecf9] text-transparent bg-clip-text text-center">E-Cell RGPV</div>
                    <h1 className="font-semibold text-4xl sm:text-6xl text-center mt-1">Who We Are</h1>
                    <p className="mt-4 mb-12">The Entrepreneurship Cell of RGPV, also known as E-cell RGPV has been established with the vision to inculcate the passion and spirit among students to pursue entrepreneurship. We not only provide the budding entrepreneurs with a platform to convert their dreams into reality but also help them to get insight into the entrepreneurial theory and practice through activities and workshops.</p>
                    <Image src="/assets/aboutE-Cell.png" alt="image of E-Cell event" width={564} height={389} />
                </div>
            </div>

        </div>
    )
}

export default WhoWeAre

