import HeroSection from '../public/components/hero-section';
import ServiceSection from '../public/components/services-section';
import Footer from '../public/components/footer';
import HowItWorks from '../public/components/howitworks';
import Image from 'next/image';
import ZanaImage from '../public/assets/quote.jpg';
import CtaImage from '../public/assets/background-hero.jpg';
import Reviews from '../public/components/Reviews';
import Header from '../public/components/header';
import Link from 'next/link';


export default function Home() {

  return (
    <>
      <section className='sticky top-0 z-50'>
        <Header/>
      </section>
     {/* Hero Section */}
    <HeroSection/>
   
    {/* // Service Section */}
    <ServiceSection/>
      
    
              {/* Testimonial section */}
              <div className="bg-gradient-to-r from-green-600 to-blue-900 pb-16 mb-10 mt-32 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full"
                      src={ZanaImage}
                      fill
                      height={1300}
                      width={1000}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-4xl italic font-medium text-white">
                      It takes as much energy to wish  for more money as it does to plan for it.

                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">Zana Mathuthu</p>
                      <p className="text-base font-medium text-cyan-100">CEO at UpMySalary</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <HowItWorks/>
          
          {/* CTA */}
          <div className="relative ">
            <div className="absolute inset-0 opacity-100 mix-blend-multiply ">
              <Image
                src={CtaImage.src}
                alt="Hero Section beams"
                layout='fill'
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mx-auto max-w-7xl py-20 px-4 text-left lg:text-center sm:px-6 lg:py-16 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 sm:text-4xl">
                <span className="block">Ready to make more</span>
                <span className="block">Contact us today!.</span>
              </h2>
              <div className="mt-8 flex gap-x-4 sm:justify-center justify-start">
                  <Link href="/login">
                  <a
                    
                    className="inline-block rounded-lg bg-blue-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Get started
                    <span className="text-blue-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  </Link>
                
                  <Link href="/contact-us">
                  <a
                    
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-green-900 ring-1 ring-blue-900/10 hover:ring-gray-900/20"
                  >
                    Contact us
                    <span className="text-green-900" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  </Link>
              </div>
            </div>
          </div>
          <Reviews/>
          <Footer/>

    </>
    
  )
}
