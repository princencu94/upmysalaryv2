import { useState, useEffect } from 'react';
import Logo from '../public/assets/logo-2.png';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
import { setCurrentUser } from '../redux/user-reducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import headerBg from '../public/assets/background-hero.jpg';

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
      if(currentUser) {
          router.push('/')
      }

  },[currentUser])


  const [credentials, setCredentials] = useState({email:"", password:""})

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({...credentials, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch(setCurrentUser(user));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  

    console.log("Form", credentials.email);
    return (
      <>
        <div className="relative flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-80 mix-blend-multiply ">
              <Image
                src={headerBg.src}
                alt="Hero Section beams"
                layout='fill'
                className="min-h-full w-full object-cover"
              />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
                <a>
                    <img
                    className="mx-auto h-12 w-auto relative"
                    src={Logo.src}
                    alt="UpMySalary"
                    />
                </a>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue-900">Create an account</h2>
          </div>
  
          <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit} >
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
                  <div className="flex items-center">
                    
                  </div>
  
                  <div className="text-sm">
                    <Link href="/login">
                      <a  className="font-medium text-blue-600 hover:text-blue-500">
                        Already have an account?
                      </a>
                    </Link>
                    
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  