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



export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({email:"", password:""});
  const router = useRouter();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
      if(currentUser) {
          router.push('/dashboard')
      }

  },[currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({...credentials, [name]: value})
  }

  const handleEmailSubmit = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(setCurrentUser(user));
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });
  }

  const handleGoogleSubmit = () => {
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              dispatch(setCredentials(user));
          }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              // const email = error.customData.email;
              console.log(error);
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
      
      });
  }

  console.log("Loggedin user", currentUser);


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
                      <Link href="/register" >
                        <a className="font-medium text-blue-600 hover:text-blue-500">
                          Do not have an account?
                        </a>
                      </Link> 
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
  