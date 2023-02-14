import React, { useRef } from "react";

import { Disclosure } from '@headlessui/react';
import { useSelector } from 'react-redux'
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Image from 'next/image';
import Head from 'next/head';

export default function CheckoutForm() {
 
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartTotalPrice = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  const form = useRef();


  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
      
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://upmysalary.com/schedule",
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };



  return (
    <>
    <Head>
            <title>
              Checkout
            </title>
            <meta
            name="description"
            content="Checkout"
            key="desc"
            />
        </Head>
    <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section aria-labelledby="order-heading" className="bg-gradient-to-l from-blue-900 to-blue-500 px-4 py-6 sm:px-6 lg:hidden">
          <Disclosure as="div" className="mx-auto max-w-lg">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2 id="order-heading" className="text-lg font-medium text-white">
                    Your Order
                  </h2>
                  <Disclosure.Button className="font-medium text-white hover:text-green-700">
                    {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                    {cartItems.map((product) => (
                      <li key={product.id} className="flex space-x-6 py-6">
                        
                        <div className="flex flex-col justify-between space-y-4">
                          <div className="space-y-1 text-sm font-medium">
                            <h3 className="text-white">{product.name}</h3>
                            <p className="text-white">${product.price}</p>
                          </div>

                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-10 space-y-6 text-sm font-medium text-white">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-white">${cartTotalPrice}</dd>
                    </div>
                
                  </dl>
                </Disclosure.Panel>

                <p className="mt-6 flex items-center justify-between border-t border-white pt-6 text-sm font-medium text-white">
                  <span className="text-base">Total</span>
                  <span className="text-base">${cartTotalPrice}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gradient-to-l from-blue-900 to-blue-500 lg:flex">
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
            {cartItems.map((product) => (
            
              <li key={product.id} className="flex space-x-6 py-6">
                        <Image
                          src={product.image.src}
                          alt={product.name}
                          width="60"
                          height="60"
                          className="h-20 w-20 flex-none rounded-md bg-gray-200 object-cover object-center"
                        />
                        <div className="flex flex-col justify-between space-y-4">
                          <div className="space-y-1 text-sm font-medium">
                            <h3 className="text-white">{product.name}</h3>
                            <p className="text-white">${product.price}</p>
                          </div>
                          
                        </div>
              </li>
            ))}
          </ul>

          <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">${cartTotalPrice}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <div className="mx-auto max-w-lg lg:pt-16">

            <form className="mt-6" id="payment-form" ref={form} onSubmit={handleSubmit} >
              <div className="grid grid-cols-12 gap-y-6 gap-x-4 mb-3">
              <div className="col-span-full">
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                </div>
                
              </div>
              <div>
              <PaymentElement id="payment-element" />
                <button type="submit" disabled={isLoading || !stripe || !elements} 
                id="submit"
                className=" mt-6 w-full rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 py-3 px-4 text-base font-medium text-white shadow-sm "
                >
                    <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner">{message}</div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
              </div>
            </form>
          </div>
        </section>
      </main>
      </>
  );
}