import Image from 'next/image'
import clsx from 'clsx'

import Container from './container'
import Expandable from './expandable'
import doniquaImage from '../assets/Doniqua.png';
import estherImage from '../assets/Esther.png';
import hausiImage from '../assets/hausi.png';
import safiImage from '../assets/safi.png';
import shaniaImage from '../assets/Shania.png';
import vetoyaImage from '../assets/vetoya.png';
import tatiImage from '../assets/Tati.png';

const testimonials = [
  [
    {
      content:
        `Zana was amazing. She was full of energy and gave me amazing advice. 
        You can tell she has a passion for her work and really cares about her clients. 
        I would 10/10 recommend her to any and everybody. 
        She's very knowledgeable and will definitely stear tou in the right direction. 
        I can't thank her enough for her help and guidance.`,
      author: {
        name: 'Tatyanna Williams',
        role: 'A month ago',
        image: tatiImage,
      },
    },
    {
      content:
        `I had a wonderful experience during my meeting today. 
        I was able to gain a lot of insight on ways that I can 'Up My Salary' just like the name states. 
        There are so many options that I was unaware of until today. 
        Thank you so much for your help Zana! You are truly amazing.`,
      author: {
        name: 'Deity Lashaa',
        role: 'A week ago',
        image: '',
      },
    },
    {
      content:
        `Zana reviewed my resume and immediately provided invaluable advice and solutions with a no-fluff approach, 
        which drew me to her services in the first place.  
        I highly recommend!`,
      author: {
        name: 'Vetoya Smith',
        role: 'A month ago',
        image: vetoyaImage,
      },
    },
  ],
  [
    {
      content:
        `Company is super efficient and highlighted my skills and experience to be attractive to top tier employers. 
        A direction I didn’t even see possible… Looking forward to recommending company services and working on the build out of my portfolio…
        `,
      author: {
        name: 'Husain Wakil',
        role: 'A month ago',
        image: hausiImage,
      },
    },
    {
      content:
        `Zana has been pivotal in helping me change my career path from retail to corporate America.  
        I would recommend her to anyone trying to do the same. 
        As I continue in my career goals, I will continue to work with her as her advice is invaluable.`,
      author: {
        name: 'Kathleen Pearson',
        role: '8 months ago',
        image: '',
      },
    },
    {
      content:
        `The feedback I got was insightful, beneficial and helped make me marketable to top earning employers. 
        Zana’s first hand knowledge landed me a job that I never saw myself having, 
        making money I hadn’t imagined and creating experiences and connections with people that aren’t normally in my inner circle.
        Keep in mind that I don’t have a formal college degree! Taking the course and utilizing the tools and suggestions provided by Zana allowed me to [not only] boost my annual salary,
        but also put me in a position where I view upward mobility [in companies] a bit differently; I know where I am there’s room for me to increase what I make every single year! Very true to the name, I’d highly recommend! 👍🏾`,
      author: {
        name: 'Safi Musgrove',
        role: '9 months ago',
        image: safiImage,
      },
    },
  ],
  [
    {
      content:
        `Zana was so helpful. She took the time to explain everything I needed help with to enhance my resume. 
        She was efficient and she answered all of my questions. 
        I highly recommend her for any help you need with career coaching and resume building.`,
      author: {
        name: 'Doniqua Keith',
        role: '9 months ago',
        image: doniquaImage,
      },
    },
    {
      content:
        `UpMySalary really gave me the push I needed. The consultant worked with me over a year to get me that increase in pay I desired. 
        I got help with my resume and mock one on one interviews on how to succeed in tough interviews. 
        This program gives you the direction you need with an experienced consultant guiding you along the way to success!!!
        I highly recommend this program :)
        `,
      author: {
        name: 'Shania M',
        role: '9 months ago',
        image: shaniaImage,
      },
    },
    {
      content:
        `Zana really connected with me and gave me some awesome pointers. She really listens to your concerns.
        `,
      author: {
        name: 'Esther Edwards',
        role: '8 months ago',
        image: estherImage,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-lg p-8 shadow-md shadow-blue-900 ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-blue-900 w-8 h-8">
        {
          author.image !== '' ?
        <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
          :
          <p className='text-center text-white font-semibold text-lg rounded-full bg-blue-900 w-8 h-8'>{author.name.charAt(0).toUpperCase()}</p>
        }
          </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Reviews() {
  return (
    <section className="py-8 sm:py-10 lg:py-16 bg-gray-50" >
      <Container className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
          Some kind words from early clients...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600 italic">
          Being able to have worked with such a passionate group of people and seeing the impact that this business has made
          in their lives means so much to me and l am grateful.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Expandable.Button>Read more reviews</Expandable.Button>
          </>
        )}
      </Expandable>
    </section>
  )
}
