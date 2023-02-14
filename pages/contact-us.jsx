import Footer from '../public/components/footer';
import Header from '../public/components/header';
import { PhoneIcon } from '@heroicons/react/24/outline'
import ContactImage from '../public/assets/contact-us.jpg';
import Image from 'next/image';
import Head from 'next/head';
export default function ContactUs() {
    return (
        <>
        <Head>
            <title>
                Contact Us
            </title>
            <meta
            name="description"
            content="For all your enquiries we have our sales and support people on standby for you, they will get back to you as soon as possible"
            key="desc"
            />
        </Head>
        <section className='sticky top-0 z-50'>
            <Header/>
        </section>

        {/* Top Banner */}
        <div className="relative bg-indigo-800">
            <div className="absolute inset-0">
                <Image
                className="h-full w-full object-cover"
                src={ContactImage}
                layout='fill'
                alt="Contact us Image"
                />
                <div className="absolute inset-0 bg-blue-800 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                    For all your enquiries we have our sales and support people on standby for you, they will get back to you as soon as possible
                </p>
            </div>
        </div>

        {/* Contact Infomation */}
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-blue-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
                    <div className="mt-3">
                    </div>
                    <div className="mt-9">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                        
                        <p>267-223-9577</p>
                        <p className="mt-1">Mon-Fri 8am to 6pm EST</p>
                        <p>7715 Crittenden St. Philadelphia, PA 19118 Ste 361</p>
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        <section>
            <Footer/>
        </section>
        </>
    )
}