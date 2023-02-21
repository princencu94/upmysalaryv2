import { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import VideoTools from '../public/components/video-tools';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../public/assets/logo-2.png';
import { setCurrentUser } from '../redux/user-reducer';
import Avatar from '../public/assets/avatardefault.png';
import PDF from '../public/assets/pdf.png';
import { collection, query, where, getDocs  } from "firebase/firestore";
import { db } from '../firebase';


const files = [
  {
    id:1,
    name: 'Course Overview - Content List',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1-fCHjmnorFm55mKy4c3NBH24OfB97U3q/view?usp=share_link'
  },
  {
    id:2,
    name: 'Course Checklist - Step By Step Checklist',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1n9F8bHq6BTPEB_MomH_C7y9o5bSfW6fE/view?usp=share_link'
  },
  {
    id:3,
    name: 'BONUS- Step-by-Step Guide to Building Your LinkedIn Profile - Office Professionals',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1-AEPFMaYeGtPzCfC4JNWbiXRCucFIusp/view?usp=share_link'
  },
  {
    id:4,
    name: 'Applying to 50 Jobs on LinkedIn',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1X3o6sQlTptbDHp7JdfSXroYuZml0rmM3/view?usp=share_link'
  },
  {
    id:5,
    name: '1st Interview Call - Scheduling Call',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1WYtjuA96PO_KVJavriJdSe7aH_zzJLas/view?usp=share_link'
  },
  {
    id:6,
    name: 'Dress & Impress for the Interview',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/13Regvs7Z_W8zxbk46tATmYawIXCeK6iS/view?usp=share_link'
  },
  {
    id:7,
    name: 'Explaining Your Job Transitions',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/16Qz4TdN5rXbViTbZhKEL9MVf4D8Ga0uX/view?usp=share_link'
  },
  {
    id:8,
    name: 'Freezing in the Interview',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1AgwU4NIjxfJpoYx6mYzxTWqhg-dcnlu5/view?usp=share_link'
  },
  {
    id:9,
    name: 'In Person & Zoom Calls',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/19nByyvOhVSiZuYYC5j4ZKuqr350fXepY/view?usp=share_link'
  },
  {
    id:10,
    name: 'Hiring Fact Sheet',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1rJH0ftUO0GM3nG2AEc72uEZKP50PyUwk/view?usp=share_link'
  },
  {
    id:11,
    name: 'Understanding HR and Recruiter Priorities',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1yI7bBxMtsNH9GwoJ8Ou3WQuv2J8GqbiC/view?usp=share_link'
  },
  {
    id:12,
    name: 'Submitting Your Resume to Staffing Companies (Two Parts)',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1eAKled1Rj4M0HBXPScX-y9S4ebbHCHmz/view?usp=share_link'
  },
  {
    id:13,
    name: 'Submitting Your Resume to Job Boards',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1R1eYJf_OBuHMqHb5489clw6WPF_nIhgk/view?usp=share_link'
  },
  {
    id:14,
    name: 'Submitting Your Resume Directly to 100+ Companies',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1vn58QFUUeHDPDYVqBVLvSKbI41ZNCI1o/view?usp=share_link'
  },
  {
    id:15,
    name: 'Linkedin Settings',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1V6yBnxPsyfiJ0dhsLdkV8TRapcbcnqKW/view?usp=share_link'
  },
  {
    id:16,
    name: 'LinkedIn - To-Do’s',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1hHJ2NAFrlHGl_smYecBEeRZBvht6EgyI/view?usp=share_link'
  },
  {
    id:17,
    name: 'LinkedIn - Tip & Links to Sample Profiles',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1-UDJpQjZhQ1tfereH_Taegrl4CTSI9Bg/view?usp=share_link'
  },
  {
    id:18,
    name: 'Promise Agreement - Zana & Associates',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1an6qfZlimaVXPZbYsS7pA9BU9VPjKYWd/view?usp=share_link'
  },
  {
    id:19,
    name: 'Crafting Your Resume',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/10D-Ubqwonkfgd_7-WCEI_OptlVfdZVHf/view?usp=share_link'
  },
  {
    id:20,
    name: 'STEP-BY-STEP Video Lessons, Tutorials, Templates, Guides, & Coaching',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1dvJ1QrGUzjVApzCsiLRpUULzpcSoP2EA/view?usp=share_link'
  },
  {
    id:21,
    name: 'Pre-Work',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1tIHFVN76dbEJwsambqm6Di_04qWpvZcu/view?usp=share_link'
  },
  {
    id:22,
    name: 'Tips for your first 90-Days on the Job',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1cUl57CbU9pg1o_mV4bMzEVat6LQ6JwmI/view?usp=share_link'
  },
  {
    id:23,
    name: 'How to access support',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/142018oh6JEFWmWfAy1PjbOvU2WOAgzYR/view?usp=share_link'
  },
  {
    id:24,
    name: 'Informational Interviews',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1Cifqya2b6XrNZf8LXrNQAiH8k4Y6okTY/view?usp=share_link'
  },
  {
    id:25,
    name: 'Resume Templates - Detailed Instructions - BONUS',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1ODY_KrDfX926YC5Gk3tiXYC5U-2LM0Hq/view?usp=share_link'
  },
  {
    id:26,
    name: 'Technical Resume Template',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/11OVrcQgsnmG569mQEurD9aqyqNqnqx5b/view?usp=share_link'
  },
  {
    id:27,
    name: 'Polish Your Online Materials Guide',
    imageUrl:PDF,
    link:'https://drive.google.com/file/d/1drT7odEMO_UGM5wxQ8uls7KL-HM5xLU9/view?usp=share_link'
  },

  
]

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Resources', href: '/resources', current: true },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Resources() {
    
  const dispatch = useDispatch(); 
    const currentUser = useSelector(state => state.user.currentUser);
    const router = useRouter();

    const [dbUser, setDbUser] = useState();


    async function  getUser(){
      const q = query(collection(db, "users"), where("email", "==", currentUser ? currentUser.email : ""));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setDbUser(doc.data());
      });
    }

    useEffect(() => {
        if(!currentUser) {
            router.push('/');
        }
        getUser();
    },[currentUser])

    const user = {
      name: dbUser ? dbUser.fullname : null,
      email: dbUser ? dbUser.email : null,
      imageUrl:Avatar   
    }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
      <Popover as="header" className="bg-gradient-to-r from-blue-900 to-blue-600 pb-0">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                    <a href="/dashboard">
                      <span className="sr-only">UpMySalary</span>
                      <img
                        className="h-8 w-auto"
                        src={Logo.src}
                        alt="UpMySalary"
                      />
                    </a>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">


                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl.src} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                       
                            <Menu.Item>
                                <button onClick={() => dispatch(setCurrentUser(null))} className='block px-4 py-2 text-sm text-gray-700'>
                                    Logout
                                </button>
                            </Menu.Item>
                      
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                    <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                      {/* Left nav */}
                      <div className="hidden lg:col-span-2 lg:block">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? 'text-white' : 'text-blue-100',
                                'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                      <div className="px-12 lg:px-0">
                        {/* Search */}
                       <p className='text-white text-sm'>Welcome { user.name }</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="pt-3 pb-2">
                          <div className="flex items-center justify-between px-4">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src={Logo.src}
                                alt="UpMySalary"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={user.imageUrl.src} alt="" />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                              <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                            </div>

                          </div>
                          <div className="mt-3 space-y-1 px-2">
                                <button onClick={() => dispatch(setCurrentUser(null))} className='block px-4 py-2 text-sm text-gray-700'>
                                    Logout
                                </button>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="mt-10 pb-8 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="relative flex items-center space-x-3 rounded-lg border border-blue-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={file.imageUrl.src} alt="pdf logo" />
              </div>
              <div className="min-w-0 flex-1">
                <a target="_blank" href={file.link} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">&copy; 2023 UpMySalary.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
