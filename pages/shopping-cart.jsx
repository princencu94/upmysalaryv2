import { useSelector, useDispatch } from 'react-redux';
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { removeItem, addItem } from '../redux/cart-reducer';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

export default function ShoppingCart() {
    
    const router = useRouter();

    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalPrice = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
  );

  const dispatch = useDispatch()

    return (
        <>
        <Head>
            <title>
              Shopping Cart
            </title>
            <meta
            name="description"
            content="Shopping Cart"
            key="desc"
            />
        </Head>
        <div className="sticky top-0 z-50">
            <Header/>
        </div>
        {/* Shopping Cart Start */}
        <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12" >
        
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {cartItems.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <Link href={`${product.type}/${product.slug}`} >
                            <a className=" text-blue-900 font-medium hover:text-gray-800">{product.name}</a>
                          </Link>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">${product.price}</p>
                      
                      </div>
                      <p className="mt-1 text-sm text-gray-500"><div
                    dangerouslySetInnerHTML={{__html: product.description.slice(0, 150)}}
                    /></p>
                    <p className="mt-1 text-base font-bold text-gray-500">
                      <span className='inline-block'><ChevronLeftIcon className="h-6 w-6 text-blue-900 cursor-pointer" onClick={() => dispatch(removeItem(product))}/></span><span className='inline-block mx-3 bg-blue-50 items-center rounded-full px-2.5 py-0.5 text-sm font-medium text-gray-800 align-top'>{product.quantity} Qty</span><span className='inline-block'><ChevronRightIcon className="h-6 w-6 text-blue-900 cursor-pointer" onClick={() => dispatch(addItem(product))}/></span>
                    </p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                      </p>
                      <div className="ml-4">
                        <button onClick={() => dispatch(removeItem(product))} className="text-sm font-medium text-blue-900 hover:text-blue-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">${cartTotalPrice}</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Cancellations are offered at 85% of payment made.</p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                onClick={() => router.push('/checkout-form')}
                className="w-full rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>

            
          </section>
        </form>
      </div>
    </div>
        <Footer/>
        </>
    )
}