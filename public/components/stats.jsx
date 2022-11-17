import Image from "next/image";
import StatesImage from '../assets/States.jpg';
export default function Stats() {
    return (
      <div className="mt-10 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
             Serving Clients in <span className="text-blue-900">29</span> States
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16 mx-auto max-w-3xl">
          <div className="">
            <Image src={StatesImage} alt="United States States of all places we have worked at" objectFit="cover" />
          </div>
        </div>
      </div>
    )
  }
  