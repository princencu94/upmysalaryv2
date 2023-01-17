import { useState } from 'react';
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
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ClipboardDocumentCheckIcon} from '@heroicons/react/24/outline'
import ServiceOptions from '../../public/components/servicesoptions';

const services = [
    

    {
      title: 'Resume Service',
      id: 1,
      slug:'resume-service',
      otherServices: [
        
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
        price:200.00,
        faqs: [
          {
            question: "What services do you offer for resumes?",
            answer:
              "Our resume service offers a range of options, including resume writing, formatting, and editing. We can also create custom cover letters and LinkedIn profiles to help you present a professional and cohesive job application.",
          },
          {
            question: "How much does your resume service cost?",
            answer:
              "The cost of our resume service will depend on the specific package you choose and the level of service you need. We offer a range of pricing options to fit different budgets and needs.",
          },
          {
            question: "How long does it take to complete a resume?",
            answer:
              "The turnaround time for a resume will depend on the complexity of the document and the level of service you choose. In general, it takes a few days to a week to complete a basic resume, while more complex documents may take longer.",
          },
          {
            question: "Do you offer a satisfaction guarantee for your resume service?",
            answer:
              "Yes, we offer a satisfaction guarantee for our resume service. If you are not completely satisfied with the final product, we will work with you to make any necessary revisions until you are happy with the result.",
          },
          {
            question: "Can you help me with a specific industry or career field?",
            answer:
              "Yes, we have experience creating resumes for a wide range of industries and career fields. Our team of professional writers has expertise in many different areas, and we can work with you to tailor your resume to the specific job or industry you are targeting.",
          },
          {
            question: "Do you offer any additional job search resources or support?",
            answer:
              "In addition to our resume service, we also offer a range of job search resources and support, including career coaching, job search strategy sessions, and interview preparation. These services can be added on to your resume package or purchased separately.",
          },

        ],
        serviceOps: [
            {
              title:"Resume Review",
              id:1.2,
              price:50.00,
              slug:'resume-service',
              imageUrl:ResumeIcon,
              anyAmount:'https://buy.stripe.com/eVa01d0nk2u9aTSeUU',
              description:'Rather than doing your resume for you, we are going to give you honest feedback about your current resume.'
            },
            {
              title:"Resume Service",
              id:1,
              price:200.00,
              slug:'resume-service',
              imageUrl:ResumeIcon,
              anyAmount:null,
              description:'Our Top Tier Resume Service provides you with a fully revamped (or entirely new) resume that speaks to your strengths and ability to be a great assert wherever you go.'
            },

        ]  
    },
    {
      title: 'LinkedIn Service',
        id: 2,
        slug:'linkedin-service',
        otherServices:[
          
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
        price:150.00,
        faqs: [
          {
            question: "What services do you offer for LinkedIn?",
            answer:
              "Our LinkedIn services include LinkedIn profile writing, editing, optimization, design, and coaching. We can help you create a professional and effective LinkedIn profile that showcases your skills, experience, and value to potential employers.",
          },
          {
            question: "How much does your LinkedIn service cost?",
            answer:
              "The cost of our LinkedIn service will depend on the specific package you choose and the level of service you need. We offer a range of pricing options to fit different budgets and needs.",
          },
          {
            question: "How long does it take to complete a LinkedIn profile?",
            answer:
              "The turnaround time for a LinkedIn profile will depend on the complexity of the profile and the level of service you choose. In general, it takes a few days to a week to complete a basic LinkedIn profile, while more complex profiles may take longer.",
          },
          {
            question: "Do you offer a satisfaction guarantee for your LinkedIn service?",
            answer:
              "Yes, we offer a satisfaction guarantee for our LinkedIn service. If you are not completely satisfied with the final product, we will work with you to make any necessary revisions until you are happy with the result.",
          },{
            question: "Can you help me with a specific industry or career field?",
            answer:
              "Yes, we have experience creating LinkedIn profiles for a wide range of industries and career fields. Our team of professional writers has expertise in many different areas, and we can work with you to tailor your LinkedIn profile to the specific job or industry you are targeting.",
          },
          {
            question: "Do you offer any additional job search resources or support?",
            answer:
              "In addition to our LinkedIn service, we also offer a range of job search resources and support, including career coaching, job search strategy sessions, and interview preparation. These services can be added on to your LinkedIn package or purchased separately.",
          },
        ],
        serviceOps: [
          {
            title:"Linkedin Review",
            id:2.2,
            price:50.00,
            slug:'linkedin-service',
            imageUrl:LinkedIcon,
            anyAmount:'https://buy.stripe.com/4gw9BN1rofgV4vufZ0',
            description:'How does your online profile compare to others in your job role and industry? LinkedIn is a professional networking site where you want all eyes to be on your profile, (the right eyes!).'
          },
          {
            title:"Linkedin Service",
            id:2,
            price:150.00,
            slug:'linkedin-service',
            imageUrl:LinkedIcon,
            anyAmount:null,
            description:'Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with more job opportunities, and LinkedIn is a great place to start!'
          },

      ]
        
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
        price:75.00,
        faqs: [
          {
            question: "What is a mock interview and why is it important?",
            answer:
              "A mock interview is a simulated job interview that allows you to practice and improve your interview skills in a safe and supportive environment. Mock interviews are important because they can help you feel more prepared and confident going into a real job interview, and can also help you identify areas for improvement in your interview technique.",
          },
          {
            question: "What services do you offer for mock interviews?",
            answer:
              "Our mock interview service includes a one-on-one simulated job interview with a professional coach. During the mock interview, you will be asked a variety of common interview questions and will have the opportunity to practice your answers and receive feedback on your performance.",
          },
          {
            question: "How much does your mock interview service cost?",
            answer:
              "The cost of our mock interview service will depend on the length of the session and the level of coaching you choose. We offer a range of pricing options to fit different budgets and needs.",
          },
          {
            question: "How long does a mock interview session last?",
            answer:
              "The length of a mock interview session can vary depending on your needs and goals. In general, a mock interview session lasts between 30 minutes and an hour.",
          },
          {
            question: "Do you offer mock interviews for specific industries or career fields?",
            answer:
              "Yes, we offer mock interviews for a wide range of industries and career fields. Our team of professional coaches has experience preparing candidates for interviews in many different areas, and can tailor the mock interview to the specific job or industry you are targeting.",
          },
          {
            question: "Can I choose the questions I want to be asked during the mock interview?",
            answer:
              "Yes, you can choose the specific questions you want to be asked during the mock interview. Alternatively, you can also ask our coaches to choose the questions based on their experience and expertise. Either way, the mock interview will be tailored to your specific needs and goals.",
          },
        ],
        serviceOps: [
          {
            title:"Mock interviews",
            id:3,
            price:75.00,
            slug:'mock-interviews',
            imageUrl:MockIcon,
            anyAmount:null,
            description:'Our mock interview service is designed to help you practice and improve your interview skills in a safe and supportive environment.'
          },
      ]
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
        link:'https://calendly.com/zana-m/coaching-with-zana',
        faqs:[],
        serviceOps: [
      ]
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
              email:'info@upmysalary.com',
              faqs:[],
              serviceOps: [
               
            ]
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
            email:'info@upmysalary.com',
            faqs:[],
            serviceOps: [
            
          ]
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
          '',
          faqs:[],
          serviceOps: [
            
        ]
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
          payLink:'https://buy.stripe.com/4gw9BN1rofgV4vufZ0',
          faqs:[],
          serviceOps: [
        ]
      },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Service() {

    const [showOptions, setShowOptions] = useState(false);
    const router = useRouter()
    const { id } = router.query
    const service = services.find(service => service.slug == id);


    const dispatch = useDispatch();

    const handleOptions = () => {
      setShowOptions(true);
    }

    return (

        
        <>
        <section className="lg:sticky lg:top-0 z-50">
          <Header/>
        </section>
        <div>
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
                        <rect x={0} y={0} width={4} height={4} className="text-gray-400" fill="currentColor" />
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
                        <rect x={0} y={0} width={4} height={4} className="text-gray-400" fill="currentColor" />
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
                <div className="prose prose-lg prose-blue mx-auto mt-6 text-gray-600">
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
                      <p className='text-gray-600'>{otherService.description}</p>
                      </>
                    ))
                  }
                  
                </div>

                <p className='text-gray-600'>
                    <div
                    dangerouslySetInnerHTML={{__html: service.otherContent}}
                    />
                </p>
                
                </div>
                  {
                    service.faqs.length !== 0 ?

                    <div className="mx-auto max-w-2xl py-0 px-4 sm:py-16 pl-7">
                      <div>
                      <h3 class="text-blue-900 text-xl font-semibold">FAQs</h3>
                      </div>
                    <div className="mx-auto max-w-2xl divide-y-2 divide-blue-900">
                        
                        <dl className="mt-6 space-y-6 divide-y divide-blue-200">
                            {service.faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                        <span className="font-medium text-blue-900">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <ChevronDownIcon
                                            className={classNames(open ? '-rotate-180 text-blue-900' : 'rotate-0', 'h-6 w-6 transform text-blue-900')}
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">{faq.answer}</p>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                      </div>
                      </div>
                      : null
                }
            </div>
            
        </div>

        
        </div>

        
        {/* End of Section */}

        {/* Call to action Button */}
        <div className='block sm:hidden fixed bottom-0 left-0 right-0'>
        {
                   
                   service.price !== 0 ?
                   <button
                   onClick={handleOptions}
                   className="inline-flex items-center justify-center w-full border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 "
                   >
                   Order Now
                   </button>
                   :
                   service.email ?
                   <Link
                           href={`mailto:${service.email}`}
                           >
                           <a 
                               className="inline-flex items-center justify-center w-full border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 "
                           target="blank">
                               Enquire Now
                           </a>
                           
                   </Link>
                   :
                   <Link
                           href={service.link}
                           >
                           <a 
                               className="inline-flex items-center justify-center w-full border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
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
                               className="inline-flex items-center justify-center w-full border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                           target="blank">
                               Pay what you can Afford
                           </a>
                           
                       </Link>
                       :
                       null
                   }
               
        </div>
        <div className="hidden sm:block bg-blue-50 fixed bottom-0 left-0 right-0">
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
                    onClick={handleOptions}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 "
                    >
                    Order Now
                    </button>
                    :
                    service.email ?
                    <Link
                            href={`mailto:${service.email}`}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
                            target="blank">
                                Enquire Now
                            </a>
                            
                    </Link>
                    :
                    <Link
                            href={service.link}
                            >
                            <a 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
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
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-l from-green-600 to-blue-900 px-5 py-1.5 text-base font-medium text-white hover:bg-blue-700 ml-4"
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
        <ServiceOptions showOptions={showOptions} setShowOptions={setShowOptions} items={service.serviceOps}/>
        </>
    )
}