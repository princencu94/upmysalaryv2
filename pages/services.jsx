import { useDispatch } from "react-redux";
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import Image from 'next/image';
import { addItem, clearCart } from "../redux/cart-reducer";

import ResumeIcon from '../public/assets/resume.png';
import LinkedIcon from '../public/assets/linkedin.png';
import MockIcon from '../public/assets/video-call.png';
import BoostIcon from '../public/assets/boost.png';
import GroupIcon from '../public/assets/meeting.png';
import EliteIcon from '../public/assets/vip-person.png';
import toast from 'react-hot-toast';



const services = [
    

    {
      title: 'Resume Service ($200.00)',
      id: 1,
      description:
        'Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email. We effectively share the accomplishments and unique contributions a person brings to the work environment, and our methodology aids in demonstrating a candidate’s competency and value. Few writing services are like our offering. Because of the deep dive we take to draw out the best in a person, a person will not need multiple different resumes in their job hunt and will rather be able to tweak this masterpiece for years to come. We can provide you with assistance in creating a compelling resume that puts you on path to reaching your career goals. This is a turnkey solution that requires a 30-minute Zoom Consultation.',
        
      imageUrl:
        ResumeIcon,
        price:200.00
    },
    {
      title: 'LinkedIn Service ($150.00)',
        id: 2,
      description:
        `LinkedIn is a professional service geared toward connecting and engaging business professionals. The site allows active users to create and maintain corporate connections with people across multiple industries, states, and countries. 

        The more professional a person’s LinkedIn page is, the more people will want to connect with them. LinkedIn is a space for sharing industry knowledge, expertise, and for connecting to opportunities that may not be listed anywhere else. LinkedIn is the largest networking platform, and if you see yourself advancing your corporate office career, then it increases your likelihood of connecting to opportunities by up to 10X!
        `,
      imageUrl:
        LinkedIcon,
        price:150.00
    },
    {
      title: 'Mock interviews ($75.00)',
      id: 3,
      description:
        `The adage is true - practice makes perfect! You can ace your mock interview by practicing with us. We help to boost your confidence by critiquing and improving how you share your value with others. We pair you with the right recruiting peer and give cutthroat feedback so that you understand exact adjustments that need to be made to get you further through the interview process.

        With our feedback, you will be better prepared to ace your next interview. Our mock interview sessions enable you to master the art of interviewing like a Rockstar. `,
      imageUrl:
        MockIcon,
        price:75.00
    },
  ]

  const enquireServices = [
    {
      title: 'The Salary Boost Accelerator ($1,249.99)',
      id: 4,
      description:
        `We offer these programs because we realize that we cannot serve everyone so we want to make you self-reliant. Yet, many features including, skills and knowledge that we will deliver in this program can benefit anyone who wills to engage in them. Since they are sort of self-guided programs, they are not based on therapeutic relationships of any kind. 
        It involves taking action to improve your physical, spiritual, mental, and emotional well-being and quality of life. Our experts will guide you through all the phases, and you will be better prepared to polish your personality. 
        `,
      imageUrl:
        BoostIcon,
      price:1249.99
    },
    {
        title: 'Elite Performer Coaching Program',
        id: 5,
        description:
          `
            The Elite Performer Coaching Program aims to improve and promote contemporary global players. This program has a great deal of flexibility that reconfigures each candidate’s level of professionalism and transforms them into a powerhouse capable of attaining the role of their desire.

            
            Our elite performer coaching program is a 3-month program where you work one on one with Zana to reach the new opportunity of your desire. As you are transformed, you can carry each skill learned through to opportunities for the duration of your life. Through our coaching, you become clear-headed and un-stuck about how to reach your next opportunity. As such, you are motivated, productive, and taking specific action steps that lead you to your desired opportunity.
          `,
        imageUrl:
            EliteIcon,
            price:0
    },
    {
        title: 'Group Coaching',
        id: 6,
        description:
          `
            Group coaching is done virtually through Zoom. Live calls are invitation only and allow candidates to ask questions directly according to their area of need. There is an established standard of success to describe what an individual who is successful looks like. And this knowledge is passed on to candidates during these calls. The goal is to transform their understanding of how others are ranking their capabilities and helping deliver the message that adjustment is needed for these individuals to reach their desired outcome.


            The coaching team at UpMySalary hosts different live calls for specific areas of professional development that directly impact a candidate’s perceived value to a corporation: Written Communication, Teamwork and Interpersonal Skills Training, Online Visibility before getting hired, , Job Performance,   The groups discuss how to increase knowledge of major issues, act, and be held accountable. The group coaching is the base of coaching abilities that put the coaching discussion into a compact group environment.
          `,
        imageUrl:
          GroupIcon,
          price:0
    },
  ]

export default function Services() {

    const dispatch = useDispatch();

   

    const handleCart = (service) => {
        
        const { id , title, description, price, imageUrl} = service;
        if(dispatch(addItem({id: id , name: title, description:description, price:price, image:imageUrl}))) {
            toast.success('Added to Cart');
        }

    }

    return (
        <>
        <div className="sticky top-0 z-50">
            <Header/>
        </div>
        <div className="mt-24">
            <h1>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                    Services
                </span>
            </h1>
        </div>
        <section id="services" className=" pt-20">
            <div className="relative px-4 py-26 sm:px-6 lg:px-10 lg:pt-10 lg:pb-28">
                <div className="absolute inset-0">
                    <div className="h-1/3  sm:h-2/3" />
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className="mx-auto  grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-blue-900 p-9 hover:bg-blue-50 cursor-auto ">
                        <div className="flex h-12 w-12 items-center justify-center  text-white">
                            <Image fill className="h-6 w-6"src={service.imageUrl} alt={service.title} />
                        </div>
                        <div className="flex flex-1 flex-col justify-between pt-6">
                            <div className="flex-1">

                                <p className="text-xl font-semibold text-blue-900">{service.title}</p>
                                <p className="mt-3 text-base text-black overflow-y-auto h-40">{service.description}</p>

                            </div>
                        </div>
                        <div className="inline-flex rounded-md  mt-8">
                            <button
                            onClick={() => handleCart(service)}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-5 py-2 text-base font-medium text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900"
                            >
                            Order Now
                            </button>
                        </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
            </div >
        </section>

        <section className=" bg-gray-50 pt-20">
            <div className="relative px-4 py-26 sm:px-6 lg:px-10 lg:pt-10 lg:pb-28">
                <div className="absolute inset-0">
                    <div className="h-1/3  sm:h-2/3" />
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className="mx-auto  grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
                    {enquireServices.map((service) => (
                        <div key={service.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg p-9 bg-blue-900 hover:bg-green-900 cursor-auto">
                        <div className="flex h-12 w-12 items-center justify-center text-white">
                            <Image fill className="h-6 w-6"src={service.imageUrl} alt={service.title} />
                        </div>
                        <div className="flex flex-1 flex-col justify-between pt-6">
                            <div className="flex-1">

                                <p className="text-xl font-semibold text-white">{service.title}</p>
                                <p className="mt-3 text-base text-white overflow-y-auto h-40">{service.description}</p>

                            </div>
                        </div>
                        <div className="inline-flex rounded-md  mt-8">
                          {
                            service.price != 0 ?
                            <button
                            onClick={() => handleCart(service)}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-2 text-base font-medium text-blue-900  hover:border hover:border-green-900 hover:text-green-900"
                            >
                            Order Now
                            </button>

                            :
                            <button
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-2 text-base font-medium text-blue-900  hover:border hover:border-green-900 hover:text-green-900"
                            >
                                Enquire Now
                            </button>

                          }
                            
                        </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
            </div >
        </section>

        
        <Footer/>
        </>
    )
}