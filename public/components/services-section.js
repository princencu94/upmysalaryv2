


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
      title: 'Courses',
      href: '#',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      imageUrl:
        '../assets/courses.jpg',
    },
  ]

export default function ServiceSection() {
  return (
   
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-40">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
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
    </div>


  )
}
