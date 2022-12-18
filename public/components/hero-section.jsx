import Header from './header1';
import Image from 'next/image'
import headerBg from '../assets/background-beams.jpg'


export default function HeroSection() {
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-4xl mx-auto">
              <span className="block xl:inline">Up My Salary, Not My Stress!</span>{'  '}
            </h1>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl max-w-3xl mx-auto mt-3'>
              <span className="block xl:inline">Helping people Up Their Value,</span>{'  '}
              <span className="block xl:inline text-blue-900">Make More Money, </span>{'  '}
              <span className="block  xl:inline">and Protect Their Income</span>
            </h1>
            
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/#services"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
