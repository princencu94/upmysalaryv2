import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid';
import { addItem } from '../../redux/cart-reducer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Link from 'next/link';

const OptionsList = ({items}) => {
    const dispatch = useDispatch();

    const handleCart = (service) => {
        
        const { id , title, description, price, imageUrl, slug, type} = service;
        if(dispatch(addItem({id: id , name: title, description:description, price:price, image:imageUrl, slug:slug, type:type}))) {
            toast.success('Added to Cart');
        }

    }
    return (
        <div className="divide-y divide-gray-200 ">
        {items.map((service) => (
            <div
            key={service.id}
            className="bg-white py-5 my-2 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-900 hover:bg-blue-50 rounded-md"
            >
            <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-blue-900">{service.title}</p>
                    <p className="truncate text-sm text-black">${service.price}</p>
                </div>
            </div>
            <div className="mt-1">
                <p className="text-sm text-gray-600 line-clamp-2">{service.description.slice(0, 150)}</p>
            </div>
            <div className="mt-3 flex gap-x-4 justify-start">
                  <button
                    onClick={() => handleCart(service)}
                    className="inline-block rounded-lg bg-gradient-to-l from-green-600 to-blue-900 px-2 py-0.5 text-sm font-medium leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Order Now
                  </button>
                {
                    service.anyAmount !== null ?
                     <Link
                    
                     href={service.anyAmount}
                     
                   >
                     <a target="_blank" className="inline-block rounded-lg bg-gradient-to-l from-green-600 to-blue-900 px-2 py-0.5 text-sm font-medium leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Pay What You Can Afford
                     </a>
                   </Link>
                   :
                   null
                }
                 

            </div>
            </div>
            
        ))}
    </div>
    )
}
export default function ServiceOptions({showOptions, setShowOptions, items}) {

  return (
    <Transition.Root show={showOptions} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowOptions}>
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
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                    onClick={() => setShowOptions(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex items-start">
                  <div className="mt-3 text-left sm:mt-0">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Select from the options below
                    </Dialog.Title>
                    <OptionsList items={items}/>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
