import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [


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
  },{
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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Faqs() {
    return (
        <>
        <div className="sticky top-0 z-50">
            <Header/>
        </div>
        <div className="pt-5 pb-36 mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="mt-20">
            <h1>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                    Faqs
                </span>
            </h1>
            </div>
            <div className="">
                <div className="mx-auto max-w-7xl py-0 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl divide-y-2 divide-blue-900">
                    <dl className="mt-6 space-y-6 divide-y divide-blue-200">
                        {faqs.map((faq) => (
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
            </div>
            
        </div>
        <Footer/>
        </>
    )
}