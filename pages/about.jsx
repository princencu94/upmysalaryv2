import Header from "../public/components/header";
import Footer from "../public/components/footer";
import Image from 'next/image';
import { Disclosure } from '@headlessui/react'
import Stats from "../public/components/stats";
import Link from "next/link";
import ZanaImage from '../public/assets/zana-4.jpeg';
import BackCTA from '../public/assets/wave_background_33.jpg';
import { motion } from "framer-motion";
import Head from 'next/head';
import WhyChooseUs from '../public/assets/chooseus.jpg';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
const faqs = [


    {
      question: 'Variety of Specific Programs For Groups or Individuals',
      answer:
        'UpMySalary specializes in developing specific programs for individuals or groups across a range of levels. No matter which group you belong to, we have something helpful to offer. Its  our priority to help our clients make enough money, and we are constantly directing our efforts to this end.',
    },
    {
        question: 'Flexible Resume Services',
        answer:
          'Our experts have years of experience and after vigorous training, they have become our team members. They focus on highlighting your unique accomplishments and personalizing your profiles and documents that will grab the attention of recruiters. Our team is passionate about your personality building',
    },
    {
        question: 'We leverage our experience to prepare for mock interviews!',
        answer:
          'You can get in the right mindset to have an effective conversation with potential employers by contacting our experts. We enable you to get prepared and have control of the interviews that are considered nerve-wracking affairs. ',
    },
    {
        question: 'We convert overwhelm to empowerment!',
        answer:
          'These days, being "Overwhelmed" is very common among employees. Frustrated and helpless people are more prone to burnout and less productive. In our coaching programs, our clients learn how to deal with busyness without succumbing to stressful scenarios. ',
      },
  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function AboutUs() {
    return (
        <>
        <Head>
            <title>
                About us
            </title>
            <meta
            name="description"
            content="UpMySalary is dedicated to transforming the lives of others so that they can achieve their career goals - and our services are effective in helping others reach their salaries globally."
            key="desc"
            />
        </Head>
        <section className="sticky top-0 z-50">
            <Header/>
        </section>
        
        <section>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
            className="overflow-hidden bg-white py-16 px-6 sm:px-6 lg:px-2 xl:py-36">
                <div className="mx-auto max-w-max lg:max-w-7xl">
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="max-w-prose text-base lg:max-w-none">

                        <p className="mt-2 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl lg:text-6xl">
                            About Us
                        </p>
                    </div>
                    </div>
                    <div className="relative">
                    <svg
                        className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                        <pattern
                            id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                    </svg>

                    <div className="relative md:bg-white md:p-6">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="prose prose-lg prose-indigo text-gray-700 lg:max-w-none">
                            <p>
                                UpMySalary is dedicated to transforming the lives of others so that they can achieve their career goals - and our services are effective in helping others reach their salaries globally. We strive to remove the academic limits that have stagnated folks for years. With our resume services, we craft your career story in a way that lands you the job interviews and exposure to reach your dreams.
                            </p>
                            <p>
                                We remain up to date with the difficulties of corporate America onboarding and provide professional development that steers people to the highest standard of professionalism. We are involved in a ton of activities for nurturing each dedicated individual of the community who wants to get his or her dream job. Our experts and informative resources offer you the perfect blend of support that uplifts your image without requiring you to gain extra certifications or degrees.
                            </p>

                            <p>
                                Whether you are a student, entry-level job seeker, or an experienced person who wants to transition to a new career and needs professional grooming, we help a variety of professionals increase their visibility, get more interviews, and secure higher pay within a reasonable amount of time.  
                            </p>
                        </div>
                        <div className="prose prose-lg prose-indigo mt-6 mb-14 lg:mb-0 text-gray-700 lg:mt-0">
                            <p>
                               The strategies and solutions we provide are endorsed by recruiters and hiring managers alike, because they work! And this allows us to enjoy bragging about our success stories.  As an expert in our field, we have equipped tens of professionals with well-structured resumes, LinkedIn overhauls, and guidance in navigating the highly competitive job market. 
                            </p>
                            <p>
                                UpMySalary Is backed by a team of experts who thrive on rolling up their sleeves to cater to the individuals needs, all at the guidance of people who are currently USA hiring managers. We discourage the <italic>one-size-fits-all</italic> approach and employ a personal approach to ensure a boost in ones salary. With the intent to eradicate subpar candidates and mediocre efforts to land ones dream pay, UpMySalary may have just what you need to boost your salary in the next 90-days.
                            </p>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </motion.div>
        </section>

        {/* CTA */}
        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
         className="-mt-24">
            <div>
                <div className=" mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <div className="absolute inset-0 -z-10">
                            <Image
                            layout="fill"
                            className="h-full w-full object-cover "
                            src={BackCTA}
                            alt=""
                            />
                            <div className="absolute inset-0 bg-blue-900  mix-blend-multiply" aria-hidden="true" />
                        </div>
                        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
                            <span className="block">Ready to dive in?</span>
                            <span className="block">Get started Today and Advance</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                            Here at UpMySalary, we up your salary, not your stress, so take this stress-free assessment to see where we might be able to help you or pick from one of our Services
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
        </motion.section>

        {/* Why Choose us */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
        >
            <div className="overflow-hidden bg-white py-0 sm:py-20">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Why choose us</h2>
                        <p className="mt-3 text-lg leading-8 text-gray-600">
                            UpMySalary doesnt just help you increase your salary, our services are designed to support your career success. We have trained recruiters worldwide to succeed in finding quality talent. As many individuals find it difficult to land interviews without a traditional background and career path, UpMySalary helps people rebrand (resume and LinkedIn), story-tell (interview talk-track), and transform (visibly) into the person of a hiring managers dreams.You can find countless reasons to rely on us, a few of them are:
                        </p>
                        <dl className="mt-5 space-y-3 ">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-0">
                            {({ open }) => (
                                <>
                                <dt>
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white bg-gradient-to-l from-blue-900 to-blue-600  rounded-3xl p-3">
                                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        {open ? (
                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                        ) : (
                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                        )}
                                    </span>
                                    </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                        ))}
                        </dl>
                    </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden bg-blue-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                            <div
                            className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                            aria-hidden="true"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                            <img
                                src={WhyChooseUs.src}
                                alt="Beautiful Female on the Phone"
                                width={1452}
                                height={1442}
                                className="-mb-12 w-[30rem] sm:w-[40rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                            />
                            </div>
                            <div
                            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                            aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </motion.section>

        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
        >
            <Stats/>
        </motion.section>

         {/* Mission Statement */}
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
        >

<div className="bg-white py-0 sm:pb-16 sm:pt-0 sm:-mt-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-0 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                    className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                    src={ZanaImage.src}
                    alt="Zana Mathuthu"
                />
              <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" />
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -ml-16 w-[68.5625rem] -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
              >
                <path
                  fill="url(#e7ccf164-908d-46dd-9194-2f8a16ad5a93)"
                  fillOpacity=".4"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="e7ccf164-908d-46dd-9194-2f8a16ad5a93"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#179C4E" />
                    <stop offset={1} stopColor="#179C4E" />
                  </linearGradient>
                </defs>
              </svg>
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
               
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “Dont go back to less, because you dont know how to get to more. Sometimes you need someone on the outside to show you what you cant see about yourself. And thats where your value starts to add up. When you know your worth, you move differently.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">Zana Mathuthu,</strong> CEO at UpMySalary
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-lg leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Mission
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                    Our goal is to mentor people through the career development process and to inspire them to exceed middle-class standards. We want to equip you with profiles that will help you to get out of the stressful phase of seeking a job. We aim to align our clients with their salary expectations. Furthermore, equipping our clients with communication skills to ace the interviews, providing them with quality, value, and satisfaction is our top priority. UpMySalary accomplishes its mission by helping others find ways to overcome bias during the interview process to achieve their financial goals.
                </p>
                <p className="mt-6">
                    Whether you are looking for a job, want to update your resume or social media profile, or need career counseling, our goal is to provide you with customized and unique services that will give you a head start on your career journey. We realize how crucial it is to meet the evolving standards of different markets. Therefore, we are striving hard to remain competitive by catering to our customers needs.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        {/* Bottom grid */}
            <div className="py-6">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                    Vision
                </h1>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-0 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="prose prose-lg prose-indigo text-gray-700 lg:max-w-none lg:pr-4">
                    <p>
                        Our vision is to inspire and make job seekers more passionate about their career journey. We envision celebrating personal growth by empowering people to put their efforts in the right direction for their career opportunities. With the innovative services, we envision becoming the leading counseling and career development services provider. 
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo -mt-12 mb-6 lg:mb-0 text-gray-700 lg:mt-0">
                    <p>
                    Our vision enables us to deliver service excellence with a touch of finesse, act with integrity by putting the candidates priority first. We offer easy-to-implement solutions and personalized services as part of a shared vision. Moreover, trust, equity, transparency, and integrity are the core values that drive us to set our vision.
                    </p>
                </div>
            </div>
            </div>
        </div>                  
        </motion.section>
        <Footer/>
        </>
    )
}
