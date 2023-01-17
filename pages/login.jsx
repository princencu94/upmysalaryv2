import { useState, useEffect } from 'react';
import Logo from '../public/assets/logo-2.png';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "firebase/auth";
import { provider, auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../redux/user-reducer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import headerBg from '../public/assets/background-beams.jpg'

export default function Login() {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({email:"", password:""});
    const [message, setMessage] = useState("");
    const router = useRouter();


    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setCredentials({...credentials, [name]: value})
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setMessage("Access beyond this point is for students in Zana's coaching program. If you are looking to grow your income and are interested in being considered to be coached by Zana, please schedule a FREE call today to see if we are a fit!")
    }

    return (
      <>
        <div className="relative flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        
          <div className="absolute inset-0 opacity-80 mix-blend-multiply ">
              <Image
                src={headerBg.src}
                alt="Hero Section beams"
                layout='fill'
                className="h-full w-full object-cover"
              />
          </div>

          <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
            <div className="relative sm:mx-auto sm:w-full sm:max-w-md mb-10">
            <Link href="/">
                <a>
                    <img
                    className="mx-auto h-12 w-auto"
                    src={Logo.src}
                    alt="UpMySalary"
                    />
                </a>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue-900">Sign in</h2>
          </div>
          <div>
            <p className='text-center text-gray-400 pb-4'>{message}</p>
          </div>
              <form className="space-y-6" onSubmit={handleEmailSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-blue-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-blue-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                <div className="text-sm">
                      <button  className="font-medium text-blue-600 hover:text-blue-500">
                        Do not have an account?
                      </button> 
                  </div>
  
                  <div className="text-sm">
                    <Link href="#">
                      <a  className="font-medium text-blue-600 hover:text-blue-500">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  