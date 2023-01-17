import { useState, useEffect, Suspense } from 'react';
import '../styles/globals.css';

import { store } from '../redux/store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/store';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Toaster } from 'react-hot-toast';
import { CookiesProvider } from "react-cookie";
import Loading from '../public/components/loading';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const MyApp = ({ Component, pageProps })=> {

  let state = store.getState();

const [clientSecret, setClientSecret] = useState("");

useEffect(() => {
  // Create PaymentIntent as soon as the page loads
  
  fetch("/api/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: state.cart.cartItems }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
}, [state.cart]);

const appearance = {
  theme: 'stripe',
};
const options = {
  clientSecret,
  appearance,
};
  
  return (
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
              {clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <Toaster position="top-right"/>
                   
                        <Component {...pageProps} />
      
                  </Elements>
              )} 
        </PersistGate>
      </Provider>
    </CookiesProvider>
  )
}


export default MyApp
