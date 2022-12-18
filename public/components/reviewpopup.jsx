import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

const validate = values => {

    const errors = {};
 
    if (!values.email) {
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
 
  };

export default function ReviewPopUp({ show , setShow}) {
  
    const form = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({

        initialValues: { 
          email: '',
          phone:'',
          name:''
        },
        validate,
        onSubmit: values => {
           setIsSubmitting(true);
            emailjs.sendForm('contact_service', 'popup_template', form.current, '5yp609nAmXIULb-Yf')
            .then((result) => {
              toast.success('You are Signed up now!');
              setIsSubmitting(false);
              formik.resetForm();
            }, (error) => {
                console.log(error.text);
            });
        },
   
      });

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={() => setShow(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />
                  </button>
                </div>

            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-blue-900">Sign up to be sure YOU stay awesome</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>We won't send you tons of emails, so share yours below</p>
                </div>
                <form onSubmit={formik.handleSubmit} ref={form} className="mt-5 ">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                       type="text"
                       name="name"
                       id="name"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                      required
                      placeholder="John Doe"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <div className="mt-1">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                    placeholder="johndoe@example.com"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                    </label>
                    <div className="mt-1">
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="+1 (555) 123 4567"
                    />
                    </div>
                </div>
                
                <div className='mt-4'>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm "
                  >
                    Sign Up
                  </button>
                </div>
                </form>
            </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
