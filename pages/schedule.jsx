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
            <h1>
                <span className="mt-2 block text-center text-4xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                    Book a Time slot 
                </span>
            </h1>
            </div>
            <div className="mt-20">
            <InlineWidget url="https://calendly.com/zana-m" />
            </div>
            
        </div>
        <Footer/>
        </>
    )
}