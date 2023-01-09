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
import Image from 'next/image';

const services = [
    

    {
      title: 'Resume Service',
      id: 1,
      slug:'resume-service',
      otherServices: [
        {
          title:'Resume Writing',
          description:'This service involves working with a professional writer to create a new resume from scratch. The writer will ask you questions about your work history, education, skills, and career goals to create a customized document that showcases your strengths and accomplishments.'
        },
        {
          title:'Resume Editing',
          description:'This service involves having a professional review your resume and provide feedback on its strengths and weaknesses. The reviewer may suggest changes to make the document more effective, or provide tips on how to tailor it to specific job openings.'
        },
        {
          title:'Resume Design',
          description:'This service involves working with a professional designer to create a visually appealing resume that stands out from the competition. A designer may use elements such as graphics, fonts, and colors to make the document more visually appealing and easy to read.'
        },
        {
          title:''
        }
      ],
      otherContent: 
      `
      <p>
      When choosing a resume service, it's important to consider the level of expertise and professionalism of the service provider. Look for a service that has a good track record and is willing to work with you to create a document that meets your specific needs and goals.
      </p>

      <p>
        It's also a good idea to ask for samples of the service provider's work and to get recommendations from other job seekers who have used the service. This will give you a sense of the quality of work you can expect and help you make an informed decision about which service to use.
      </p>

      <p>
        Overall, resume services can be a valuable resource for job seekers who want to improve their chances of getting hired. By working with a professional writer or editor, you can create a document that showcases your strengths and accomplishments in a clear and concise manner, increasing your chances of standing out in a competitive job market.
      </p>
      `,
      description:
        `<p>
        Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email. We effectively share the accomplishments and unique contributions a person brings to the work environment, and our methodology aids in demonstrating a candidate’s competency and value. Few writing services are like our offering. Because of the deep dive we take to draw out the best in a person, a person will not need multiple different resumes in their job hunt and will rather be able to tweak this masterpiece for years to come. 
        </p>
        <div>
          <h3 class="text-blue-900">How do we do it?</h3>
          <p class="-mb-4 font-semibold text-blue-900">1.	Learn More About You!</p>
          <ul role="list">
            <li>You will describe yourself and your goals through our <strong>Career Questionnaire</strong></li>
          </ul>

          <p class="-mb-4 font-semibold text-blue-900">2.	Provide Feedback</p>
          <ul role="list">
            <li>Have an <strong>existing</strong> resume? We’ll review it and share the changes that are needed to help you shine.</li>
            <li>If you do not have a resume, we will <strong>create a new resume</strong> for you, and outline the steps that will be taken.</li>
          </ul>

          <p class="-mb-4 font-semibold text-blue-900">3.	Create Your New Resume/CV!</p>
          <ul role="list">
            <li>We will create your resume and make it top-notch, presentable, and attractive to the leaders who hire for your skillset.</li>
            <li>Schedule a 20-minute video call to express your end goal with our Career & Salary Expert.</li>
          </ul>
        </div>`,
      imageUrl:
        ResumeIcon,
        price:200.00
    },
    {
      title: 'LinkedIn Service',
        id: 2,
        slug:'linkedin-service',
        otherServices:[
          {
            title:'LinkedIn profile writing',
            description:'Our team of professional writers will craft a LinkedIn profile that highlights your strengths, accomplishments, and career goals. This includes writing your summary, experience, education, and skills sections, as well as optimizing your profile for search engines.'
          },
          {
            title:'LinkedIn profile editing',
            description:'If you already have a LinkedIn profile, we can review and edit it to ensure it is well-written, visually appealing, and tailored to your career goals.'
          },
          {
            title:'LinkedIn profile optimization',
            description:'We can help you optimize your LinkedIn profile for search engines by identifying key words and phrases that will help you rank higher in search results.'
          },
          {
            title:'LinkedIn profile design',
            description:'Our team of designers can create a visually appealing and professional LinkedIn profile, including custom header and profile images.'
          },
          {
            title:'LinkedIn profile coaching',
            description:'We offer coaching sessions to help you make the most of your LinkedIn profile and effectively use it to advance your career. This includes guidance on networking, building connections, and finding job opportunities.'
          }
        ],
        otherContent:`
        <p>
          Overall, our LinkedIn services are designed to help you create a strong online presence and effectively use LinkedIn as a tool for professional development and job search.
        </p>
        `,
        description:
          `
          <p>
          Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with more job opportunities, and LinkedIn is a great place to start! 

          As the most highly used professional networking platform, a professional image can take you far. Our LinkedIn profile service will create, review and transform your LinkedIn page so that you can attract the audience seeking your unique blend of skills and experiences.          
          </p>
          <div>
          <h3 class="text-blue-900">Here’s how we do it</h3>
          <p class="-mb-4 font-semibold text-blue-900">1.	Review Your Current Profile! <span>(If you do not have a LinkedIn profile currently, skip to step 2)</span></p>
          <ul role="list">
            <li>If you already have a LinkedIn profile, we can review and edit it to ensure it is well-written, visually appealing, and tailored to your career goals.</li>
          </ul>

          <p class="-mb-4 font-semibold text-blue-900">2.	Provide Feedback! </p>
          <ul role="list">
            <li>Step by step, one of our LinkedIn experts will tell you what needs to be added and changed on your profile to fit your professional image.</li>
          </ul>

          <p class="-mb-4 font-semibold text-blue-900">3.	Create (or Update) Your Professional LinkedIn Profile</p>
          <ul role="list">
            <li>With a strengthened online profile/image, you are ready to continue your job search with confidence.</li>
          </ul>
        </div>
          `,
      imageUrl:
        LinkedIcon,
        price:150.00
    },
    {
      title: 'Mock interviews',
      id: 3,
      slug:'mock-interviews',
      otherServices:[
        {
          title:'One-on-one Simulated Job Interview',
          description:'You will participate in a simulated job interview with a professional coach, who will ask you a variety of common interview questions.'
        },
        {
          title:'Customized Questions and Scenarios',
          description:'You can choose the specific questions you want to be asked during the mock interview, or you can ask our coaches to choose the questions based on their experience and expertise. Either way, the mock interview will be tailored to your specific needs and goals.'
        },
        {
          title:'Feedback and Guidance',
          description:'During the mock interview, you will receive feedback and guidance from your coach on your performance. This will include constructive criticism on areas for improvement, as well as tips and strategies for answering common interview questions.'
        },
        {
          title:'Recorded Session',
          description:'The mock interview will be recorded, so you can review and analyze your performance afterwards. This can be a valuable tool for identifying areas for improvement and fine-tuning your interview skills.'
        },
      ],
      otherContent:`
      <p>
        Overall, our mock interview service is designed to help you feel more prepared and confident going into a real job interview, and to give you the tools and techniques you need to succeed.
      </p>
      `,
      description:

        `
        <p>
          Our mock interview service is designed to help you practice and improve your interview skills in a safe and supportive environment. Here's what you can expect from our mock interview service:
        </p>
        `,
      
        imageUrl:
        MockIcon,
        price:75.00
    },
    {
        title: 'The Salary Boost Accelerator',
        id: 4,
        slug:'the-salary-boost-accelerator',
        otherServices:[],
        otherContent:'',
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
        price:0,
        link:'https://calendly.com/zana-m/coaching-with-zana'
      },
      {
          title: 'Elite Performer Coaching Program',
          id: 5,
          slug:'elite-performer-coaching-program',
          otherServices:[],
          otherContent:'',
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
          otherServices:[],
          otherContent:'',
          description:
            `
            <p>
              Group coaching is a great way to hear the feedback and experiences of multiple people. You will have the opportunity to ask questions of experienced salary coaches, recruiters, and human resources professionals and have your questions addressed on the spot. Advice is given in each session so that you have the secret sauce and be able to present yourself professionally and confidently for your job search.             </p>
            </p>
            <p>
            The goal of group coaching is to spread knowledge in small groups to ensure a smooth transfer of information. You will learn how candidates are ranked and know what you can do to up your value, how to increase your offer rate, ways to draw more eyes to your resume, and learn how to network with others to secure jobs through referrals.            </p>
            </p>
            `,
          imageUrl:
            GroupIcon,
            price:0,
            email:'info@upmysalary.com'
      },
      {
        title: 'Resume Review',
        id: 7,
        slug:'resume-review',
        description:
          `
          <p>
          Resume services are a type of professional writing service that help job seekers create a document that summarizes their education, experience, skills, and achievements. These services are designed to help individuals stand out in a competitive job market and increase their chances of getting hired.
          There are several types of resume services available, including:
          </p>
          `,
        imageUrl:
          ResumeIcon,
          price:50.00,
          payLink:'https://buy.stripe.com/eVa01d0nk2u9aTSeUU',
          otherServices: [
            
          ],
          otherContent: 
          ''
      },
      {
        title: 'Linkedin Review',
        id:8,
        slug:'linkedin-review',
        otherServices:[
          
        ],
        otherContent:`
        `,
        description:
          `
          <p>
            Our LinkedIn services are designed to help you create a professional and effective LinkedIn profile that showcases your skills, experience, and value to potential employers. Here are the specific services we offer:
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


    const dispatch = useDispatch();

    const handleCart = (service) => {
        
        const { id , title, description, price, imageUrl, slug} = service;
        if(dispatch(addItem({id: id , name: title, description:description, price:price, image:imageUrl, slug:slug}))) {
            toast.success('Added to Cart');
        }

    }
    return (

        
        <>
        <section className='lg:sticky lg:top-0 z-50'>
          <Header/>
        </section>
        <div className="">
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
            <div className="relative px-4 sm:px-6 lg:px-8 z-0">
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
                <div>
                  {
                    service.otherServices.map((otherService) => (
                      <>
                      <h3 className='text-blue-900'>{otherService.title}</h3>
                      <p>{otherService.description}</p>
                      </>
                    ))
                  }
                  
                </div>

                <p>
                    <div
                    dangerouslySetInnerHTML={{__html: service.otherContent}}
                    />
                </p>
                
                </div>

                
            </div>
        </div>

        
        </div>

        
        {/* End of Section */}

        {/* Call to action Button */}
        <div className="bg-blue-50 ">
            <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                <p>
                    <span className="text-blue-900"> Get started today.</span>
                </p>
                
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md ">
                    
                    {
                   
                    service.price !== 0 ?
                    <button
                    onClick={() => handleCart(service)}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 "
                    >
                    Order Now
                    </button>
                    :
                    service.email ?
                    <Link
                            href={`mailto:${service.email}`}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
                            target="blank">
                                Enquire Now
                            </a>
                            
                    </Link>
                    :
                    <Link
                            href={service.link}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
                            target="blank">
                                Schedule Meeting
                            </a>
                            
                    </Link>
                    }

                    {
                        service.payLink ?
                        <Link
                            href={service.payLink}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
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