import { useDispatch } from 'react-redux';
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { addItem } from '../redux/cart-reducer';


export default function LinkedIn() {

    const dispatch = useDispatch();

    const linkedin = {
        id:2,
        name:'LinkedIn Service ($150.00)',
        price:150,
        description:'Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with job opportunities!',
        image: '../assets/linkedin.jpg'
    }

    const addToCart = () => {
        dispatch(addItem(linkedin));
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
                        LinkedIn
                    </span>
                </h1>
                <p className="mt-8 text-xl leading-8 text-gray-500">
                    Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with job opportunities! With me, after our 30-45 minute intake call, I will be ready to jumpstart your LinkedIn profile so that you can network like a boss. Whats needed to make the most out of this service?
                </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                <ul role="list">
                    <li>45-minutes to discuss the goals for your LinkedIn profile.</li>
                    <li>Your most up-to-date resume (or list of job roles, dates, and company names)</li>
                    <li>Access to your LinkedIn profile (we will protect your privacy and will not need your password.)</li>
                    <li>Payment of $100.</li>
                    <li>Turnaround time is 1-Week.</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
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