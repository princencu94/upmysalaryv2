import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCurrentUser } from '../../redux/user-reducer';
import {

  Bars3Icon, 
  XMarkIcon,
  ShoppingBagIcon,

  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, 
  ClipboardDocumentListIcon, 
  NewspaperIcon, 
  WindowIcon, 
  DocumentMagnifyingGlassIcon,
  DocumentChartBarIcon,
  BookOpenIcon,
  WalletIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';


const solutions = [
  {
    name: 'The Salary Boost Accelerator',
    href: '/service/the-salary-boost-accelerator',
    icon: WalletIcon,
  },
  {
    name: 'Elite Performer Coaching Program',
    href: '/service/elite-performer-coaching-program',
    icon: TrophyIcon,
  },
  {
    name: 'Group Coaching',
    href: '/service/group-coaching',
    icon: UserGroupIcon,
  },
]


const products = [
  {
    name: 'Resume Service',
    
    href: '/service/resume-service',
    icon:   ClipboardDocumentListIcon,
  },
  {
    name: 'LinkedIn Service',
   
    href: '/service/linkedin-service',
    icon: NewspaperIcon,
  },
  { name: 'Mock interviews',
    href: '/service/mock-interviews', 
    icon: WindowIcon },
  {
    name: 'Ebooks',
    href: '/ebooks',
    icon: BookOpenIcon,
  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(removeCurrentUser());
    }
    const cartItems = useSelector((state) => state.cart.cartItems);
    const currentUser = useSelector(state => state.user.currentUser);
  
    const cartTotal = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
  );

  return (
    <Popover className="relative bg-white shadow-md">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
                <a>
              <span className="sr-only">UpMySalary</span>
              <img
                className="h-16 w-16 "
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
                        <div className="relative grid gap-6 bg-gradient-to-l from-blue-900 to-blue-500 px-5 py-6 sm:gap-8 sm:p-8">
                          {products.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-blue-800"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-blue-50 " aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
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
                        <div className="relative grid gap-6 bg-gradient-to-l from-blue-900 to-blue-500 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-blue-800"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-blue-50" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
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

            {/* <Link href="/faqs" >
                <a className="text-base font-medium text-blue-900 hover:text-green-900">Faqs</a>
            </Link> */}
            <Link href="/contact-us" className="text-base font-medium text-blue-900 hover:text-green-900">
                <a className="text-base font-medium text-blue-900 hover:text-gray-900">Contact Us</a>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {
                currentUser ?
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-3">
                      <span className="sr-only">Open user menu</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-900 ">
                        <span className="text-sm font-medium leading-none text-white">{currentUser.email.slice(0, 2).toUpperCase()}</span>
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleSignOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                :
                <Link href="/login">
                <a
                  className="inline-block rounded-lg px-4 py-1 text-base font-semibold leading-7 text-green-900 ring-1 ring-blue-900/10 hover:ring-gray-900/20 mr-3"
                >
                  Login
                </a>
          </Link>
            }
           
            
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
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-14 w-auto"
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
              <div className="mt-6 z-50">
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
                <Link href="/faqs" >
                    <a className="text-base font-medium text-blue-900 hover:text-green-900">Faqs</a>
                </Link>
                <Link href="/contact-us" >
                    <a className="text-base font-medium text-blue-900 hover:text-green-900">Contact</a>
                </Link>
              </div>
              <div className="mt-6 text-center">
              {
                currentUser ?
                <p className='text-green text-sm'>{currentUser.email !== undefined ? currentUser.email : null}</p>
                :
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer? 
                      <Link href="#">
                        <a className="text-green-900">
                          Login
                        </a>
                      </Link>
                    </p>
              }
                    <div className='mt-4 bg-blue-50 py-3 rounded-md'>
                    <Link href="/shopping-cart" >
                      <a >
                      Cart 
                      <span className="ml-1 inline-flex items-center rounded-full bg-blue-300 px-2.5 py-0.5 text-xs font-medium text-blue-900">
                          {cartTotal}
                      </span>
                      </a>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
