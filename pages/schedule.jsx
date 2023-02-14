import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { InlineWidget } from "react-calendly";
import { clearCart } from "../redux/cart-reducer";
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Schedule() {
    const router = useRouter();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearCart());
    },[]);

    const handleDone = (e) => {
        e.preventDefault()
        router.push('/');
    }

    return (
        <>
        <Head>
            <title>
              Schedule
            </title>
            <meta
            name="description"
            content="Schedule"
            key="desc"
            />
        </Head>
        <div className="pt-5 pb-20 mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="mt-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">Book a Time slot</h2>
                    <p className="mx-auto mt-3 mb-16 max-w-2xl text-lg text-gray-600 sm:mt-4">
                        Please book a slot with Zana based on the service you paid for below
                    </p>
                </div>
            </div>
            <div className="mt-20">
            <InlineWidget url="https://calendly.com/upmysalary" />
            </div>
            
        </div>
        <div className="mb-8 flex gap-x-4 justify-center">
                  <button
                    onClick={handleDone}
                    className="inline-block rounded-lg w-72 sm:w-96 bg-gradient-to-l from-green-600 to-blue-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Done
                  </button>
                </div>
        <Footer/>
        </>
    )
}