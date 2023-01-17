import Header from "../public/components/header";
import Footer from "../public/components/footer";
import Image from 'next/image';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Stats from "../public/components/stats";

import ZanaImage from '../public/assets/zana-4.jpeg';
import BackCTA from '../public/assets/wave_background_33.jpg';
import { motion } from "framer-motion";

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
        <section className="sticky top-0 z-50">
            <Header/>
        </section>
        
        <section>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
            className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
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
                        <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
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
                        <div className="prose prose-lg prose-indigo mt-6 mb-14 lg:mb-0 text-gray-500 lg:mt-0">
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
         className="-mt-20">
            <div className="relative">
                <div className="absolute inset-0">
                    <Image
                    layout="fill"
                    className="h-full w-full object-cover "
                    src={BackCTA}
                    alt=""
                    />
                    <div className="absolute inset-0 bg-blue-900  mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className=" relative mx-auto max-w-2xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Get started Today and Advance</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Here at UpMySalary, we up your salary, not your stress, so take this stress-free assessment to see where we might be able to help you or pick from one of our Services
                    </p>
                    <div className="mt-8 flex justify-center">

                    {/* <div className="ml-3 inline-flex">
                        <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-blue-900 hover:bg-indigo-200"
                        >
                            Take Survey
                        </a>
                    </div> */}
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
            <div className="relative overflow-hidden bg-white pt-3">
                <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-4">
                    <div>
                    
                    <div className="mt-6 ">
                        <h2 className=" text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Why choose us</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            UpMySalary doesnt just help you increase your salary, our services are designed to support your career success. We have trained recruiters worldwide to succeed in finding quality talent. As many individuals find it difficult to land interviews without a traditional background and career path, UpMySalary helps people rebrand (resume and LinkedIn), story-tell (interview talk-track), and transform (visibly) into the person of a hiring managers dreams. 
                        </p>
                        <p className="mt-4 text-lg text-gray-500">
                            We encourage employees to ramp up their abilities, upgrade their resumes and LinkedIn profiles to leverage their skills to maximize their earnings. Training videos and presentations that we provide employers have helped nourish employees in the corporate workplace. You can find countless reasons to rely on us, a few of them are:
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className="mt-0 sm:mt-10 mx-4">
                    <div className="mt-8 py-6">
                        <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="mt-6 space-y-6 divide-y divide-blue-900">
                            {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-blue-900">
                                        <span className="font-medium text-blue-900">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <ChevronDownIcon
                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">{faq.answer}</p>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                        </div>
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
            <div className="relative  bg-white py-16 sm:py-0 sm:pb-16">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-10">
                    <div className="relative sm:py-16 lg:py-0">
                    
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative overflow-hidden rounded-2xl  pb-10 shadow-xl">
                        <Image
                            className="absolute inset-0 h-full w-full object-cover"
                            src={ZanaImage}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900 opacity-90" />
                        <div className="relative px-8">
                            
                            <blockquote className="mt-8">
                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                <svg
                                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-400"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative">
                                    Dont go back to less, because you dont know how to get to more. Sometimes you need someone on the outside to show you what you cant see about yourself. And thats where your value starts to add up. When you know your worth, you move differently.
                                </p>
                            </div>

                            <footer className="mt-4">
                                <p className="text-base font-semibold text-blue-200">Zana Mathuthu, CEO at UpMySalary</p>
                            </footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                            Mission
                        </h2>
                        <div className="mt-6 space-y-6 text-gray-500">
                        <p className="text-lg">
                            Our goal is to mentor people through the career development process and to inspire them to exceed middle-class standards. We want to equip you with profiles that will help you to get out of the stressful phase of seeking a job. We aim to align our clients with their salary expectations. Furthermore, equipping our clients with communication skills to ace the interviews, providing them with quality, value, and satisfaction is our top priority. UpMySalary accomplishes its mission by helping others find ways to overcome bias during the interview process to achieve their financial goals.
                        </p>
                        <p className="text-lg leading-7">
                            Whether you are looking for a job, want to update your resume or social media profile, or need career counseling, our goal is to provide you with customized and unique services that will give you a head start on your career journey. We realize how crucial it is to meet the evolving standards of different markets. Therefore, we are striving hard to remain competitive by catering to our customers needs. 
                        </p>
                        
                        </div>
                    </div>

                    {/* Vision section */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                            Vision
                        </h2>
                        <div className="mt-6 space-y-6 text-gray-500">
                            <p className="text-lg">
                                Our vision is to inspire and make job seekers more passionate about their career journey. We envision celebrating personal growth by empowering people to put their efforts in the right direction for their career opportunities. With the innovative services, we envision becoming the leading counseling and career development services provider. 
                                Our vision enables us to deliver service excellence with a touch of finesse, act with integrity by putting the candidates priority first. We offer easy-to-implement solutions and personalized services as part of a shared vision. Moreover, trust, equity, transparency, and integrity are the core values that drive us to set our vision. 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>                     
        </motion.section>
        <Footer/>
        </>
    )
}
