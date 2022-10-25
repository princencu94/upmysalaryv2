
import Link from 'next/link';

const services = [


    {
      title: 'Resume',
      href: '/resume',
      description:
        'Our resume writing services assist job applicants in enhancing their image on paper. This is often the first thing a hiring manager or recruiter sees before choosing to give a candidate a call or send an email.',
      imageUrl:
        '../assets/resume.jpg',
    },
    {
      title: 'Linkedin',
      href: 'linkedin',
      description:
        'Online visibility is essential for networking with the right recruiters and hiring managers. Your goal is to be presented with job opportunities! With me, after our 30-45 minute intake call, I will be ready to jumpstart your LinkedIn profile.',
      imageUrl:
        '../assets/linkedin.jpg',
    },
    {
      title: 'Mock interviews ',
      href: '#',
      description:
        'The adage is true - practice makes perfect! You can ace your mock interview by practicing with us. We help to boost your confidence by critiquing and improving how you share your value with others.',
      imageUrl:
        '../assets/courses.jpg',
    },
  ]

export default function ServiceSection() {
  return (
   <>
    <div className="relative  px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-20">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          On one end, we have our turnkey resume and LinkedIn solutions and mock interview roleplaying. On the other, we have coaching programs and 1:1 coaching opportunities that walk clients step-by-step towards specific monetary and career goals
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={service.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={service.href} className="mt-2 block">
                    <a>
                      <p className="text-xl font-semibold text-blue-900">{service.title}</p>
                      <p className="mt-3 text-base text-gray-500">{service.description}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>

      

    </div >

      <div className='flex flex-row justify-center -mt-8 mb-14 z-50' >  
            <Link href="/services">
        <a
          className="text-center z-60 rounded-md border border-transparent px-5 py-3 text-base font-medium text-green-900 hover:bg-indigo-50 sm:w-auto"
        >
          More Services
        </a>
        </Link>
      </div>  
      </>     
  )
}
