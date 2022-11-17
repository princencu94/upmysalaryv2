import Header from "../public/components/header";
import Footer from "../public/components/footer";
import Link from 'next/link';
import Image from 'next/image';
import SalaryBoosterImage from '../public/assets/salary-booster.png'

export default function Courses() {
    return (
        <>
        <div className="pt-5">
        <Header/>
        <div className="relative overflow-hidden bg-white pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-5xl lg:px-8">
                <div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl"><Link href='https://paygrowth.upmysalary.com/'>The Salary Boost Accelerator.</Link></h2>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    <Link href='https://paygrowth.upmysalary.com/'> Takes you on a proven path towards improved personality and corporate marketability, where you will understand your true value and how to show it to others in terms of getting a higher salary offer in a quantifiable amount of time.</Link>
                </p>
                </div>
                <div className="mt-12 mb-10 sm:mb-24 lg:mb-24">
                <Link href='https://paygrowth.upmysalary.com/'>
                <Image
                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                    src={SalaryBoosterImage}
                    alt=""
                />
                </Link>
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
                    <a
                    href="https://paygrowth.upmysalary.com/"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                        Take Course
                    </a>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}