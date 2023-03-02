import Image from "next/image";
import StatesImage from '../assets/States.jpg';
export default function Stats() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl pb-24 sm:px-6 lg:px-8">
          <div className=" bg-white px-6 py-5 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center pt-10">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                <span>Serving Clients in <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-blue-900">29</span> States</span>
                {" "}
                <br/>
                <span> And <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-600 to-blue-900">3</span> Countries: Australia, Canada, South Africa</span>
                </h2>
              </div>
            </div>
            <div className="mt-10 bg-white pb-12 sm:pb-16 mx-auto max-w-3xl">
              <div className="">
                <Image src={StatesImage} alt="United States States of all places we have worked at" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  