import Link from 'next/link';
import Image from 'next/image';
import ResumeIcon from '../assets/resume.png';
import LinkedIcon from '../assets/linkedin.png';
import MockIcon from '../assets/video-call.png';

const features = [


  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ResumeIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LinkedIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MockIcon,
  },
]


const services = [


    {
      title: 'Resume',
      href: '/services/#services',
      description:
        'Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email.',
      icon:
        ResumeIcon,
    },
    {
      title: 'Linkedin',
      href: '/services/#services',
      description:
        'Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with job opportunities! With me, after our 30-45 minute intake call.',
      icon:
        LinkedIcon,
    },
    {
      title: 'Mock interviews ',
      href: '/services/#services',
      description:
        'The adage is true - practice makes perfect! You can ace your mock interview by practicing with us. We help to boost your confidence by critiquing and improving how you share your value with others.',
      icon:
        MockIcon,
    },
  ]

export default function ServiceSection() {
  return (
   <>
          <div className="bg-white py-24">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">Our Services</h2>
              <p className="mx-auto mt-3 mb-16 max-w-2xl text-lg text-black sm:mt-4">
              On one end, we have our turnkey resume and LinkedIn solutions and mock interview roleplaying. On the other, we have coaching programs and 1:1 coaching opportunities that walk clients step-by-step towards specific monetary and career goals
              </p>
            </div>
              <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                {services.map((feature) => (
                  <div key={feature.title} className="shadow-lg shadow-blue-900 rounded-md p-5 hover:bg-blue-50">
                    <dt>
                      <div className="flex h-12 w-12 items-center justify-center  text-white">
                        <Image fill className="h-6 w-6"src={feature.icon} alt={feature.title} />
                      </div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-900">{feature.title}</p>
                    </dt>
                    <dd className="mt-2 mb-5 text-base text-black">{feature.description}</dd>
                    <Link href={feature.href}><a className='text-blue-900' >Read More</a></Link>
                  </div>
                ))}
              </dl>
            </div>
          </div>

      <div className='flex flex-row justify-center -mt-8 mb-14 z-50' >  
            <Link href="/services">
        <a
          className="text-center z-60 rounded-md border border-blue-900 px-5 py-3 text-base font-medium text-blue-900 hover:bg-indigo-50 sm:w-auto"
        >
          More Services
        </a>
        </Link>
      </div>  

      {/* New Section */}

      
      </>     
  )
}