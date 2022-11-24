import Header from './header';
import Image from 'next/image'
import headerBg from '../assets/bg-head.jpg'


export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-50 h-screen">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={headerBg}
          alt="Header Beams"
        />
        <div className="absolute inset-0  mix-blend-multiply" aria-hidden="true" />
      </div>

      
      <div className="relative pt-6 pb-16 sm:pb-24">
      
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-4xl mx-auto">
              <span className="block xl:inline">Up My Salary, Not My Stress!</span>{'  '}
            </h1>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl max-w-3xl mx-auto mt-3'>
              <span className="block xl:inline">Helping people Up Their Value,</span>{'  '}
              <span className="block xl:inline">Make More Money, </span>{'  '}
              <span className="block text-blue-900 xl:inline">and Protect Their Income</span>
            </h1>
            
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-900 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Take a survey
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
