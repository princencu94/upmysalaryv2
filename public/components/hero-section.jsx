import Link from 'next/link'
import Image from 'next/image'
import headerBg from '../assets/background-beams.jpg'
import { useSelector } from 'react-redux';

export default function HeroSection() {
  const currentUser = useSelector(state => state.user.currentUser);
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
          <div className="text-left lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-4xl mx-auto">
              <span className="block xl:inline">UpMySalary, Not My Stress!</span>{'  '}
            </h1>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl max-w-3xl mx-auto mt-3'>
              <span className="block xl:inline">Helping people Up Their Value,</span>{'  '}
              <span className="block xl:inline text-blue-900">Make More Money, </span>{'  '}
              <span className="block  xl:inline">and Protect Their Income</span>
            </h1>
            
            <div className="mt-8 flex gap-x-4 lg:justify-center justify-start">
              {
                currentUser ? 
                null
                :
                <>
                  <Link href="/register">
                  <a
                    className="inline-block rounded-lg bg-blue-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Get started
                    <span className="text-blue-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  </Link>
                  <Link href="/login">
                  <a
                    
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-green-900 ring-1 ring-blue-900/10 hover:ring-gray-900/20"
                  >
                    Login
                    <span className="text-green-900" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  </Link>
                  </>
                }
                </div>
          </div>
        </main>
      </div>
    </div>
  )
}
