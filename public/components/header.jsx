import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import {

  Bars3Icon, 
  XMarkIcon,
  ShoppingBagIcon,

  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import navBeams from '../assets/background-hero.jpg'

const solutions = [
  {
    name: 'The Salary Boost Accelerator',
    href: '/service/the-salary-boost-accelerator',
    icon: ChevronRightIcon,
  },
  {
    name: 'Elite Performer Coaching Program',
    href: '/service/elite-performer-coaching-program',
    icon: ChevronRightIcon,
  },
  {
    name: 'Group Coaching',
    href: '/service/group-coaching',
    icon: ChevronRightIcon,
  },
]

const resources = [
  {
    name: 'Ebooks',
    href: '/ebooks',
    icon: ChevronRightIcon,
  },
  {
    name: 'Courses',
    href: '/courses',
    icon: ChevronRightIcon,
  },
]

const products = [
  {
    name: 'Resume Service',
    
    href: '/service/resume-service',
    icon: ChevronRightIcon,
  },
  {
    name: 'LinkedIn Service',
   
    href: '/service/linkedin-service',
    icon: ChevronRightIcon,
  },
  { name: 'Mock interviews',
    href: '/service/mock-interviews', 
    icon: ChevronRightIcon },
  {
    name: 'Resume Review',
    href: '/service/resume-review',
    icon: ChevronRightIcon,
  },
  {
    name: 'Linkedin Review',
    href: '/service/linkedin-review',
    icon: ChevronRightIcon,
  }
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const cartItems = useSelector((state) => state.cart.cartItems);
  
    const cartTotal = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
  );

  return (
    <Popover className="relative bg-white ">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-blue-700 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
                <a>
              <span className="sr-only">UpMySalary</span>
              <img
                className="  h-16 w-16 "
                src="../assets/logo-2.png"
                alt="UpMySalaryLogo"
              />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">

            <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-blue-900 hover:bg-gray-100 hover:text-gray-500 ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6 text-blue-900" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/about" >
              <a className="text-base font-medium text-blue-900 hover:text-green-900">About Us</a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-900' : 'text-black',
                      'group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='text-blue-900'>Products</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-green-600' : 'text-blue-900',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {products.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-blue-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-900' : 'text-black',
                      'group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='text-blue-900'>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-green-600' : 'text-blue-900',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-blue-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-900' : 'text-black',
                      'group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='text-blue-900'>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-green-600' : 'text-blue-900',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-blue-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* <Link href="/support-tools" >
                <a className="text-base font-medium text-blue-900 hover:text-gray-900">Support Tools</a>
            </Link> */}
            <Link href="/contact-us" className="text-base font-medium text-blue-900 hover:text-green-900">
                <a className="text-base font-medium text-blue-900 hover:text-gray-900">Contact us</a>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="/shopping-cart" >
                <a>
                <ShoppingBagIcon className='h-6 -mt-1.5 inline-flex text-blue-900'/> 
                <span className="ml-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    {cartTotal}
                </span>
                </a>
            </Link>
    
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="../assets/logo-2.png"
                    alt="UpMySalary Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-900 hover:bg-gray-100 hover:text-gray-500 ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-blue-900">{item.name}</span>
                    </a>
                  ))}
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-blue-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* <Link href="/support-tools" >
                    <a className="text-base font-medium text-blue-900 hover:text-gray-900">Support Tools</a>
                </Link> */}
                <Link href="/ebooks" >
                    <a className="text-base font-medium text-blue-900 hover:text-green-900">Ebooks</a>
                </Link>
                <Link href="/courses" >
                    <a className="text-base font-medium text-blue-900 hover:text-green-900">Courses</a>
                </Link>
                <Link href="/contact-us" >
                    <a className="text-base font-medium text-blue-900 hover:text-green-900">Contact</a>
                </Link>
              </div>
              <div className='text-center bg-blue-100 py-3 text-blue-900 rounded-md'>
                <Link href="/shopping-cart" >
                    <a>
                    Cart 
                    <span className="ml-1 inline-flex items-center rounded-full bg-blue-300 px-2.5 py-0.5 text-xs font-medium text-blue-900">
                        {cartTotal}
                    </span>
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
