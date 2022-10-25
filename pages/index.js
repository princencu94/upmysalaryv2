import HeroSection from '../public/components/hero-section';
import ServiceSection from '../public/components/services-section';
import Footer from '../public/components/footer';
import HowItWorks from '../public/components/howitworks';
import Image from 'next/image';

import ZanaImage from '../public/assets/zana-4.jpeg';



export default function Home() {
  
  return (
    <>
 
     {/* Hero Section */}
    <HeroSection/>
   
    {/* // Service Section */}
    <ServiceSection/>
      
    <HowItWorks/>
              {/* Testimonial section */}
              <div className="bg-gradient-to-r from-green-600 to-blue-900 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full"
                      src={ZanaImage}
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
                      <p className="mt-6 text-2xl font-medium text-white">
                        Dont go back to less, because you dont know how to get to more. Sometimes you need someone on the outside to show you what you cant see about yourself. And thats where your value starts to add up. When you know your worth, you move differently.

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

          <Footer/>
    </>
    
  )
}
