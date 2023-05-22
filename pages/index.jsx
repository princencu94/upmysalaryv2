import HeroSection from '../public/components/hero-section';
import ServiceSection from '../public/components/services-section';
import Footer from '../public/components/footer';
import HowItWorks from '../public/components/howitworks';
import Reviews from '../public/components/reviews';
import Header from '../public/components/header';
import Link from 'next/link';
import { motion } from "framer-motion";
import Head from 'next/head';
import PlayerScreenshot from '../public/assets/player-app-screenshot.jpg';

export default function Home() {

  return (
    <>
    <Head>
        <title>
          UpMySalary - Home
        </title>
        <meta
          name="description"
          content="Helping people Up Their Value, Make More Money, and Protect Their Income"
          key="desc"
        />
      </Head>
      <section className='sticky top-0 z-50'>
        <Header/>
      </section>
     {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.0 }}
      className="z-40"
    >
      <HeroSection/>
    </motion.div>
    
   
    {/* // Service Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.0 }}
      className="-mt-6 z-50"
    >
      <ServiceSection/>
    </motion.div>
    
      
    
              {/* Testimonial section */}
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
              >
              
              <div className="bg-white">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="relative isolate overflow-hidden bg-blue-800 py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                      <div className="lg:row-start-2 lg:max-w-md">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          The Salary Boost Accelerator
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-blue-200">
                          We have happily dedicated ourselves to improving the lives of others by providing expert coaching to help professionals increase their income as quickly as possible. We do this by upping the value they offer to others, and as such, they are packaged to being higher value candidates. We help increase the pay of professionals by 25% in as little as 90 days. Confidently, we provide the steps professionals need to get visible in the market and hone in on opportunities that will satisfy and exceed their income needs.
                        </p>
                      </div>
                      <img
                        src={PlayerScreenshot.src}
                        alt="Product screenshot"
                        className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[48rem] lg:max-w-none"
                        width={1903}
                        height={1442}
                      />
                      <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                        <Link href="https://buy.stripe.com/9AQ01d6LI6Kp7HG8wz">
                          <a target="_blank" className="inline-block rounded-lg bg-gradient-to-l from-green-600 to-blue-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                            Buy the course for $197.00
                            <span className="text-blue-200" aria-hidden="true">
                              &rarr;
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <svg
                      className="pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0"
                      viewBox="0 0 1155 678"
                      fill="none"
                    >
                      <path
                        fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)"
                        fillOpacity=".25"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                      />
                      <defs>
                        <linearGradient
                          id="c0458c57-1330-459f-9d5c-f0d75c210466"
                          x1="1155.49"
                          x2="-78.208"
                          y1=".177"
                          y2="474.645"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#188C58" />
                          <stop offset={1} stopColor="#fff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
            className="bg-blue-100"
          >
            <HowItWorks/>
          </motion.div>
          
          
          {/* CTA */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8">
              <div className="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
                  Ready to kickstart your journey?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                  Schedule a free 30-minute consultation call with Zana, THE salary coach, to see if you are a fit to join one of our coaching programs.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="https://calendly.com/upmysalary/coaching">
                    <a  target="_blank" className="rounded-md bg-gradient-to-l from-green-600 to-blue-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Schedule Meeting
                    </a>
                  </Link>
                  <Link href="/contact-us">
                    <a  className="text-base font-semibold leading-7 text-white">
                      Call us <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  aria-hidden="true"
                >
                  <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                  <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                      <stop stopColor="#188C58" />
                      <stop offset={1} stopColor="#fff" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <Reviews/>
          </motion.div>
          
          <Footer/>

    </>
    
  )
}
