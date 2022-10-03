import { useState, useEffect, useContext } from 'react';
import '../styles/globals.css';
import { CartProvider } from '../public/context/cart-context';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CartContext } from '../public/context/cart-context';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function MyApp({ Component, pageProps }) {

  const { cartItems } = useContext(CartContext)

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <CartProvider>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      )}
      
    </CartProvider>
  )
}

export default MyApp
