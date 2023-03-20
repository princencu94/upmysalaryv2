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
import Head from 'next/head';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required!';
  } 

  if (!values.email) {
    errors.email = 'Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


export default function Login() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const router = useRouter();
  const currentUser = useSelector(state => state.user.currentUser);
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
      if(currentUser) {
          router.push('/dashboard')
      }

  },[currentUser])

  const formik = useFormik({

    initialValues: {
      email: '',
      password:'',
    },
    validate,
    onSubmit: values => {
      setSubmitForm(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(setCurrentUser(user));
          setSubmitForm(false);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage("Ooops sorry Email and Password do not match!");
      });
    }
  });


    return (
      <>
        <Head>
            <title>
              Login
            </title>
            <meta
            name="description"
            content="Login page"
            key="desc"
            />
        </Head>
        <div className="relative flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        
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
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <p className='text-red-500 text-base'>{message}</p>
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
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-blue-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  {formik.errors.email ? <div className=' text-red-500 text-sm'>{formik.errors.email}</div> : null}
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
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-blue-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  {formik.errors.password ? <div className=' text-red-500 text-sm'>{formik.errors.password}</div> : null}
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                      <Link href="/register" >
                        <a className="font-medium text-blue-600 hover:text-blue-500">
                          Do not have an account?
                        </a>
                      </Link> 
                  </div>
  
                  <div className="text-sm">
                    <Link href="/forgot-password">
                      <a  className="font-medium text-blue-600 hover:text-blue-500">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                </div>
  
                <div>
                  <button
                    disabled={submitForm}
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
                {/* <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blue-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-blue-900">Or continue with</span>
                  </div>
                </div>
  
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div>
                    <button
                    onClick={handleGoogleSubmit}
                      className="inline-flex w-full justify-center rounded-md border border-blue-300 bg-white py-2 px-4 text-sm font-medium text-blue-500 shadow-sm hover:bg-blue-50"
                    >
                      <span className="sr-only">Sign in with Google</span>
                        Google

                    </button>
                  </div>
                </div>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  