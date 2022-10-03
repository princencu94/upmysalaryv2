import { useContext } from 'react';

import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { CartContext } from '../public/context/cart-context';
import { BoltIcon, TrophyIcon , LightBulbIcon } from '@heroicons/react/24/outline';


const features = [


    {
        id:1,
        name: 'Helps you find a job faster',
        description:
            'Candidates using resumes rewritten by UpMySalary have proven to be 3 times more likely to secure a new job than those using a self-written resume.',
        icon: BoltIcon,
    },
    {
        id:2,
        name: 'Makes you more valuable in the eyes of recruiters',
        description:
            'Recruiters valued candidates with professionally written resumes to be worth 7% more than when assessed using their self-written versions. With a professionally written resume, you can help ensure your next position will come with a bigger paycheck.',
        icon: TrophyIcon,
    },
    {
        id:3,
        name: 'Get noticed more',
        description:
            'Job seekers using UpMySalary are interviewed 2 to 3 times more often than those using self-written resumes.',
        icon: LightBulbIcon,
    },
  ]

export default function Resume() {

    const { addItem } = useContext(CartContext);

    const resume = {
        id:1,
        title:"Resume Service",
        price:120,
        description:'I create a compelling resume that aligns with where you are looking to go. This is a turnkey solution that requires one (1) 30-minute Zoom Consultation within 4 days of booking the service.'
    }

    const addToCart = () => {
        addItem(resume)
    }


    return (
        <>
        <div className="pt-5">
        <Header/>
        <div className="relative overflow-hidden bg-white py-36">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg
                    className="absolute top-12 left-full translate-x-32 transform"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                    className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg
                    className="absolute bottom-12 left-full translate-x-32 transform"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                <h1>
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                        Resumes
                    </span>
                </h1>
                <p className="mt-8 text-xl leading-8 text-gray-500">
                    Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email.
                </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                <p>
                    We effectively share the accomplishments and unique contributions you bring to the work environment, draw out your skills, and our methodology aids in demonstrating your competency and value. Few writing services are like our offering. Because of the deep dive we take to draw out the best in you, you will not need multiple different resumes in your job hunt and will rather be able to tweak this masterpiece for years to come.
                </p>
                
                <p>
                    How am I awesome at this? With over 13 years of staffing, recruiting, hiring, firing & career professional development experience, across 12 industries and having managed recruiting teams and supported over 200 companies nationwide with hiring and growing teams, primarily supporting 6-figure professionals, I'm a pro at making people's value shine & stand out.
                </p>

                <p>
                    I create a compelling resume that aligns with where you are looking to go. This is a turnkey solution that requires one (1) 30-minute Zoom Consultation within 4 days of booking the service.
                </p>
                
                </div>

                
            </div>
        </div>

        
        </div>

        {/* Feature Section */}
        <div className="overflow-hidden bg-blue-50 py-16 lg:py-0">
            <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-5xl lg:px-4">
                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="relative">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">A professionally written resume:</h3>

                    <dl className="mt-10 space-y-10">
                    {features.map((item) => (
                        <div key={item.id} className="relative">
                        <dt>
                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-blue-900 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>

                <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                    <img
                    className="relative mx-auto rounded-lg"
                    width={490}
                    src="../assets/resume-inner.jpg"
                    alt=""
                    />
                </div>
                </div>



            </div>
        </div>
        {/* End of Section */}

        {/* Call to action Button */}
        <div className="bg-blue-50">
            <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-blue-700">Get started today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <button
                    onClick={addToCart}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                    Order Now
                    </button>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}