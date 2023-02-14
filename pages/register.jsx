import { useState, useEffect } from 'react';
import Logo from '../public/assets/logo-2.png';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from 'next/link';
import { setCurrentUser } from '../redux/user-reducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import headerBg from '../public/assets/background-hero.jpg';
import { useFormik } from 'formik';

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
      if(currentUser) {
          router.push('/dashboard');
      }

  },[currentUser])

  const formik = useFormik({

    initialValues: {
      email: '',
      password:'',
    },

    onSubmit: values => {

      createUserWithEmailAndPassword(auth, values.email, values.password)
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
    },

  });

 

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setCredentials({...credentials, [name]: value})
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     dispatch(setCurrentUser(user));
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // }
  const provider = new GoogleAuthProvider();
  const handleGoogleSubmit = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch(setCurrentUser(user));
            console.log(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            console.log("Errors", errorMessage);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
    
    });
}
  
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
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue-900">Create an Account</h2>
          </div>
  
          <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={formik.handleSubmit} >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
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
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-blue-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                    Confirm Passowrd
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
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
                    className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blue-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-blue-900">Or continue with</span>
                  </div>
                </div>
  
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <button
                    onClick={handleGoogleSubmit}
                      className="inline-flex w-full justify-center rounded-md border border-blue-300 bg-white py-2 px-4 text-sm font-medium text-blue-500 shadow-sm hover:bg-blue-50"
                    >
                      <span className="sr-only">Sign in with Google</span>
                        Google

                    </button>
                  </div>
  
                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border border-blue-300 bg-white py-2 px-4 text-sm font-medium text-blue-500 shadow-sm hover:bg-blue-50"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      Facebook
                    </a>
                  </div>
  

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  