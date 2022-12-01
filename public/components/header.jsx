import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Support Tools', href: '/support-tools' },
  { name: 'Ebooks', href: '/ebooks' },
  { name: 'Courses', href: '/courses' },
]

const Header = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const cartTotal = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
);

    return (
        <div className='bg-white z-50 '>
        <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 shadow-sm lg:py-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/">
                    <a>
                    <span className="sr-only">UpMySalary</span>
                    <img
                      className="  h-16 w-16  "
                      src="../assets/logo-2.png"
                      alt=""
                    />
                    </a>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} >
                    <a className='text-blue-900 font-medium  hover:text-green-900'>{item.name}</a>
                  </Link>
                ))}
              </div>
              <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end lg:justify-end text-blue-900">
                <span className="inline-flex h-8">
                    <p><Link  href="/shopping-cart" replace>Cart</Link> 
                    <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {cartTotal}
                    </span>
                    </p>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-40 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="mt-5 -ml-7 h-32 w-auto sm:h-36"
                      src="../assets/logo-1.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <p className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-900 hover:bg-gray-100"><Link replace href="/shopping-cart">Cart</Link> <span>{cartTotal}</span></p>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        </div>
    )
}

export default Header;