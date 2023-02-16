import Link from 'next/link';
import Image from 'next/image';
import ResumeIcon from '../assets/resume.png';
import LinkedIcon from '../assets/linkedin.png';
import MockIcon from '../assets/video-call.png';

import { ChevronDownIcon, 
  ClipboardDocumentListIcon, 
  NewspaperIcon, 
  WindowIcon, 
  DocumentMagnifyingGlassIcon,
  DocumentChartBarIcon,
  BookOpenIcon,
  WalletIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/20/solid';

const services = [


    {
      title: 'Resume',
      href: '/service/resume-service',
      description:
        'Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call. ',
      icon:
        ClipboardDocumentListIcon,
    },
    {
      title: 'Linkedin',
      href: '/service/linkedin-service',
      description:
        'Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with job opportunities! With me, after our 30-45 minute intake call.',
      icon:
        NewspaperIcon,
    },
    {
      title: 'Mock interviews ',
      href: '/service/mock-interviews',
      description:
        'The adage is true - practice makes perfect! You can ace your mock interview by practicing with us. We help to boost your confidence by critiquing and improving.',
      icon:
        WindowIcon,
    },
  ]

export default function ServiceSection() {
  return (
   <>
          <div className="pb-20" id="services ">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">Our Services</h2>
              <p className="mx-auto mt-3 mb-16 max-w-2xl text-lg text-gray-600 sm:mt-4">
              On one end, we have our turnkey resume and LinkedIn solutions and mock interview roleplaying. On the other, we have coaching programs and 1:1 coaching opportunities that walk clients step-by-step towards specific monetary and career goals
              </p>
            </div> */}
              <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                {services.map((feature) => (
                  <div key={feature.title} className="bg-gradient-to-l from-blue-900 to-blue-600  rounded-3xl p-5 hover:bg-blue-50">
                    <dt>
                      <div className="flex h-12 w-12 items-center justify-center  text-white">
                      <feature.icon className="h-10 w-10 flex-none text-blue-100" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-100">{feature.title}</p>
                    </dt>
                    <dd className="mt-2 mb-5 text-base text-gray-200">{feature.description}</dd>
                    <Link href={feature.href}><a className='text-blue-300' >Read More <span className="text-blue-300" aria-hidden="true">
                      &rarr;
                    </span></a></Link>
                  </div>
                ))}
              </dl>
            </div>
          </div>

      {/* New Section */}

      
      </>     
  )
}
