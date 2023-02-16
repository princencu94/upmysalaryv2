import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import headerBg from '../assets/background-hero.jpg'
import ReviewPopUp from './reviewpopup';

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    
    <div className="relative overflow-hidden bg-gray-50 h-screen">
          <div className="absolute inset-0 opacity-100 mix-blend-multiply ">
            <Image
              src={headerBg.src}
              alt="Hero Section beams"
              layout='fill'
              className="h-full w-full object-cover"
            />
          </div>

      
      <div className="relative pt-6 pb-16 sm:pb-24">
      
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">

          <div className="text-left lg:text-center pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-4xl mx-auto">
              <span className="block xl:inline">UpMySalary, Not My Stress!</span>{'  '}
            </h1>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl max-w-3xl mx-auto mt-3'>
              <span className="block xl:inline">Helping people Up Their Value,</span>{'  '}
              <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-blue-900">Make More Money, </span>{'  '}
              <span className="block  xl:inline">and Protect Their Income</span>
            </h1>
            
                <div className="mt-8 flex gap-x-4 lg:justify-center justify-start">
                  <button
                    onClick={() => setShowPopup(true)}
                    className=" animate-bounce inline-block rounded-lg bg-gradient-to-l from-green-600 to-blue-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Get started
                    <span className="text-blue-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
          </div>
        </main>
      </div>
      <ReviewPopUp show={showPopup} setShow={setShowPopup}/>
    </div>
  )
}
