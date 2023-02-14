import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import headerBg from '../assets/Hero-trans.png'
import ReviewPopUp from './reviewpopup';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import heroImage from '../assets/upmysalaryHero.png';



export default function HeroSection2() {
  const [showPopup, setShowPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    
    <div className="relative  overflow-hidden h-screen">
        <div className="absolute inset-0 opacity-70">
            <Image
              src={headerBg.src}
              alt="Hero Section beams"
              width={1280}
              height={720}
              className="object-cover"
            />
        </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="block xl:inline">Helping people up their value,</span>{'  '}
              <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-blue-900">make more money, </span>{'  '}
              <span className="block  xl:inline">and protect their Income</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          UpMySalary is dedicated to transforming the lives of others so that they can achieve their career goals - and our services are effective in helping others reach their salaries globally. We strive to remove the academic limits that have stagnated folks for years.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="#">
            <a
              
              className="rounded-md bg-gradient-to-l from-green-600 to-blue-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
            >
              Get started &rarr;
            </a>
            </Link>
          </div>
        </div>
        <div className="mt-0 sm:mt-10 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <Image width={550} height={400} src={heroImage.src} alt="3 pictures showing different people" className='h-96 w-full' />
        </div>
      </div>
    </div>
  )
}
