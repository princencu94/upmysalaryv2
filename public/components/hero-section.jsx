import Link from 'next/link'
import Image from 'next/image'
import headerBg from '../assets/Hero-trans.png'
import ReviewPopUp from './reviewpopup';
import heroImage from '../assets/upmysalaryHero.png';



export default function HeroSection() {

  return (
    
    <div className="relative overflow-hidden ">
        <div className="absolute inset-0 opacity-70 -z-10 h-screen w-full object-cover">
            <Image
              src={headerBg.src}
              alt="Hero Section beams"
              width={1280}
              height={720}
              className=""
            />
        </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-0 max-w-lg text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="block xl:inline">Helping people up their value,</span>{'  '}
              <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-blue-900">make more money, </span>{'  '}
              <span className="block  xl:inline">and protect their Income</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          UpMySalary is dedicated to transforming the lives of others so that they can achieve their career goals - and our services are effective in helping others reach their salaries globally. We strive to remove the academic limits that have stagnated folks for years.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/login">
            <a
              
              className="rounded-md bg-gradient-to-l from-green-600 to-blue-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
            >
              Get started &rarr;
            </a>
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mt-10 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img width={300} height={500} src={heroImage.src} alt="3 pictures showing different people" className='sm:h-96 sm:w-11/12 w-full h-auto' />
        </div>
      </div>
    </div>
  )
}
