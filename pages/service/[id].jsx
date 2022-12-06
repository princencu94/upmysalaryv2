import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { addItem } from '../../redux/cart-reducer';
import Header from "../../public/components/header";
import Footer from "../../public/components/footer";
import ResumeIcon from '../../public/assets/resume.png';
import LinkedIcon from '../../public/assets/linkedin.png';
import MockIcon from '../../public/assets/video-call.png';
import BoostIcon from '../../public/assets/boost.png';
import GroupIcon from '../../public/assets/meeting.png';
import EliteIcon from '../../public/assets/vip-person.png';
import toast from 'react-hot-toast';
import Link from 'next/link';


const services = [
    

    {
      title: 'Resume Service ($200.00)',
      id: 1,
      slug:'resume-service',
      description:
        `<p>
        Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email. We effectively share the accomplishments and unique contributions a person brings to the work environment, and our methodology aids in demonstrating a candidate’s competency and value. Few writing services are like our offering. Because of the deep dive we take to draw out the best in a person, a person will not need multiple different resumes in their job hunt and will rather be able to tweak this masterpiece for years to come. 
        </p>
        <p>
        We can provide you with assistance in creating a compelling resume that puts you on path to reaching your career goals. This is a turnkey solution that requires a 30-minute Zoom Consultation.
        </p>`,
      imageUrl:
        ResumeIcon,
        price:200.00
    },
    {
      title: 'LinkedIn Service ($150.00)',
        id: 2,
        slug:'linkedin-service',
      description:
        `
        <p>
        LinkedIn is a professional service geared toward connecting and engaging business professionals. The site allows active users to create and maintain corporate connections with people across multiple industries, states, and countries. 
        </p>
        <p>
        The more professional a person’s LinkedIn page is, the more people will want to connect with them. LinkedIn is a space for sharing industry knowledge, expertise, and for connecting to opportunities that may not be listed anywhere else. LinkedIn is the largest networking platform, and if you see yourself advancing your corporate office career, then it increases your likelihood of connecting to opportunities by up to 10X!
        </p>
        `,
      imageUrl:
        LinkedIcon,
        price:150.00
    },
    {
      title: 'Mock interviews ($75.00)',
      id: 3,
      slug:'mock-interviews',
      description:

        `
        <p>
        The adage is true - practice makes perfect! You can ace your mock interview by practicing with us. We help to boost your confidence by critiquing and improving how you share your value with others. We pair you with the right recruiting peer and give cutthroat feedback so that you understand exact adjustments that need to be made to get you further through the interview process.
        </p>
        <p>
        With our feedback, you will be better prepared to ace your next interview. Our mock interview sessions enable you to master the art of interviewing like a Rockstar. 
        </p>
        `,
      
        imageUrl:
        MockIcon,
        price:75.00
    },
    {
        title: 'The Salary Boost Accelerator ($1,249.99)',
        id: 4,
        slug:'the-salary-boost-accelerator',
        description:
          `<p>
          We offer these programs because we realize that we cannot serve everyone so we want to make you self-reliant. Yet, many features including, skills and knowledge that we will deliver in this program can benefit anyone who wills to engage in them. Since they are sort of self-guided programs, they are not based on therapeutic relationships of any kind. 
          </p>
            <p>
          It involves taking action to improve your physical, spiritual, mental, and emotional well-being and quality of life. Our experts will guide you through all the phases, and you will be better prepared to polish your personality. 
            </p>
          `,
        imageUrl:
          BoostIcon,
        price:1249.99
      },
      {
          title: 'Elite Performer Coaching Program',
          id: 5,
          slug:'elite-performer-coaching-program',
          description:
            `
            <p>
              The Elite Performer Coaching Program aims to improve and promote contemporary global players. This program has a great deal of flexibility that reconfigures each candidate’s level of professionalism and transforms them into a powerhouse capable of attaining the role of their desire.
            </p>
            <p>
              Our elite performer coaching program is a 3-month program where you work one on one with Zana to reach the new opportunity of your desire. As you are transformed, you can carry each skill learned through to opportunities for the duration of your life. Through our coaching, you become clear-headed and un-stuck about how to reach your next opportunity. As such, you are motivated, productive, and taking specific action steps that lead you to your desired opportunity.
            </p>
              `,
          imageUrl:
              EliteIcon,
              price:0,
              email:'info@upmysalary.com'
      },
      {
          title: 'Group Coaching',
          id: 6,
          slug:'group-coaching',
          description:
            `
            <p>
              Group coaching is done virtually through Zoom. Live calls are invitation only and allow candidates to ask questions directly according to their area of need. There is an established standard of success to describe what an individual who is successful looks like. And this knowledge is passed on to candidates during these calls. The goal is to transform their understanding of how others are ranking their capabilities and helping deliver the message that adjustment is needed for these individuals to reach their desired outcome.
            </p>
            <p>
              The coaching team at UpMySalary hosts different live calls for specific areas of professional development that directly impact a candidate’s perceived value to a corporation: Written Communication, Teamwork and Interpersonal Skills Training, Online Visibility before getting hired, , Job Performance,   The groups discuss how to increase knowledge of major issues, act, and be held accountable. The group coaching is the base of coaching abilities that put the coaching discussion into a compact group environment.
            </p>
              `,
          imageUrl:
            GroupIcon,
            price:0,
            email:'info@upmysalary.com'
      },
      {
        title: 'Resume Review ($50.00)',
        id: 7,
        slug:'resume-review',
        description:
          `
          <p>
          Rather than doing your resume for you, we're going to give you honest feedback about your current resume. We'll take a deep dive look into your background and provide substancial feedback that you can take with you and use to edit and recreate your resume into a masterpiece. 
          </p>
          <p>
          The feedback will provide guidance that you can use throughout your life whenever you make a career transition. You'll send us your resume, along with answers to 5 questions about your background. Within 72 hours, your resume feedback will be sent back to you, where you can then take action and skyrocket.
          </p>
          `,
        imageUrl:
          ResumeIcon,
          price:50.00,
          payLink:'https://buy.stripe.com/eVa01d0nk2u9aTSeUU'
      },
      {
        title: 'Linkedin Review ($50.00)',
        id:8,
        slug:'linkedin-review',
        description:
          `
          <p>
          How does your online profile compare to others in your job role and industry? LinkedIn is a professional networking site where you want all eyes to be on your profile, (the right eyes!). Our LinkedIn review will allow you to make changes to your profile on your own and you will know exactly what to do to make it the best possible for where you are right now in your career journey. 
          </p>
          <p>
          This feedback can be used as guidance as you edit your profile throughout your working life.
          </p>
          `,
        imageUrl:
          LinkedIcon,
          price:50.00,
          payLink:'https://buy.stripe.com/4gw9BN1rofgV4vufZ0'
      },
  ]

  
export default function Service() {

    const router = useRouter()
    const { id } = router.query
    const service = services.find(service => service.slug == id);

    const resume = {
        id:1,
        name:"Resume Service ($200.00)",
        price:200,
        description:'I create a compelling resume that aligns with where you are looking to go. This is a turnkey solution that requires one (1) 30-minute Zoom Consultation within 4 days of booking the service.',
        image: '../public/assets/resume.jpg',
    }

    const dispatch = useDispatch();

    const handleCart = (service) => {
        
        const { id , title, description, price, imageUrl, slug} = service;
        if(dispatch(addItem({id: id , name: title, description:description, price:price, image:imageUrl, slug:slug}))) {
            toast.success('Added to Cart');
        }

    }
    return (

        
        <>
        <div className="">
        <Header/>
        <div className="relative overflow-hidden bg-white py-36">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg
                    className="absolute top-12 left-full translate-x-32 transform"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-700" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                    className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-700" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                <h1>
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                       {service.title}
                    </span>
                </h1>
 
                </div>
                <div className="prose prose-lg prose-blue mx-auto mt-6 text-black">
                <p>
                    <div
                    dangerouslySetInnerHTML={{__html: service.description}}
                    />
                </p>
                
                </div>

                
            </div>
        </div>

        
        </div>

        
        {/* End of Section */}

        {/* Call to action Button */}
        <div className="bg-blue-50 fixed bottom-0 left-0 right-0">
            <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                <p>
                    <span className="">Ready to dive in?</span>
                    <span className="text-blue-900"> Get started today.</span>
                </p>
                
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md ">
                    
                    {
                   
                    service.price !== 0 ?
                    <button
                    onClick={() => handleCart(service)}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 "
                    >
                    Order Now
                    </button>
                    :
                    <Link
                            href={`mailto:${service.email}`}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 ml-4"
                            target="blank">
                                Enquire Now
                            </a>
                            
                    </Link>
                    }

                    {
                        service.payLink ?
                        <Link
                            href={service.payLink}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 ml-4"
                            target="blank">
                                Pay what you can Afford
                            </a>
                            
                        </Link>
                        :
                        null
                    }
                
                
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}