import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import HowItWorksImage from '../assets/howitwork.jpg';
import Image from 'next/image';

const faqs = [
    {
      id: 1,
      question: "Get matched with an expert in your industry",
      answer:
        "We listen to your needs to understand what you exactly want. After knowing your concern we schedule you with the relevant expert. During the consultation with an advisor, you will be directed according to the path most suited for your career happiness and goals. ",
    },
    {
        id: 2,
        question: "Work one-on-one to craft your career story",
        answer:
          "We evaluate your qualifications and experiences in one-on-one interviews and discover what makes you stand out from other candidates. After focusing on your credentials and unique attributes we craft your custom resume. Once you get your resume we collaborate with writers for any revision till you are satisfied. ",
      },
      {
        id: 3,
        question: "Receive a resume tailored to your goals",
        answer:
          "Our team of expert writers will work closely with you to craft a custom resume that fits your unique needs and career aspirations like a glove. Once you're satisfied with the final product, we'll send you the updated resume, giving you the confidence to apply for new opportunities and accelerate your job search. We understand that a well-written resume is essential to making a strong impression on potential employers, which is why our writers take the time to understand your career goals and craft a personalized document that highlights your skills, accomplishments, and experiences in the best possible light.",
      },
      {
        id: 4,
        question: "Upgrade: LinkedIn Optimization",
        answer:`Upgrade your job search with our LinkedIn Optimization service. In addition to crafting a well-written resume, we'll work with you to optimize your LinkedIn profile for maximum impact. With a customized and professional online presence, you'll be able to connect with employers and recruiters, expand your network, and improve your job prospects.

        Our team of experts will carefully review your profile and provide tailored recommendations to enhance your visibility and engagement on LinkedIn. From optimizing your headline and summary to fine-tuning your skills and endorsements, we'll help you make the most of this powerful networking platform.
        
        Don't let an underperforming LinkedIn profile hold you back in your job search. Upgrade your online presence today and take your career to the next level with our LinkedIn Optimization service.`
      },
      {
        id: 5,
        question: "Upgrade: Interview Coaching",
        answer:
          "We provide group coaching sessions to enable you to overcome the obstacles that have been hindering your success in the toughest interviews. ",
      },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">How it Works?</h2>
                <p className="mt-3 text-base leading-8 text-gray-600">
                  Our process begins by learning about your professional goals and learning more about you. From career coaching to resume building, we develop people professionally to heighten their market value.
                </p>
                <dl className="mt-10 space-y-3 ">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-0">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white bg-gradient-to-l from-blue-900 to-blue-600  rounded-3xl p-3">
                              <span className="text-base font-semibold leading-7">{faq.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-blue-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <img
                    src={HowItWorksImage.src}
                    alt="Beautiful Female on the Phone"
                    width={1452}
                    height={1442}
                    className="-mb-12 w-[30rem] sm:w-[40rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  