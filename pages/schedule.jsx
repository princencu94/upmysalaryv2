import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { InlineWidget } from "react-calendly";
import { clearCart } from "../redux/cart-reducer";


export default function Schedule() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearCart());
    },[]);
    return (
        <>
        <div>
            <Header/>
        </div>
        <div className="pt-5 pb-20 mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="mt-20">
            <h1 className="mx-auto max-w-3xl">
                <span className="mt-2 block text-center text-4xl font-bold leading-8 tracking-tight text-blue-900">
                    Book a Time slot 
                </span>
                <span className="mt-2 text-center text-base text-gray-700 ">Please select the Service you paid for and set an Appointment with Zana.</span>
            </h1>
            </div>
            <div className="mt-20">
            <InlineWidget url="https://calendly.com/upmysalary" />
            </div>
            
        </div>
        <Footer/>
        </>
    )
}