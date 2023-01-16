import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import  Container from './container';

const reviews = [

    {
      body:
        `Zana was amazing. She was full of energy and gave me amazing advice. 
        You can tell she has a passion for her work and really cares about her clients. 
        I would 10/10 recommend her to any and everybody. 
        She's very knowledgeable and will definitely stear tou in the right direction. 
        I can't thank her enough for her help and guidance.`,
        author:'Tatyanna Williams',
        title:'',
        rating:5
    },
    {
      body:
        `I had a wonderful experience during my meeting today. 
        I was able to gain a lot of insight on ways that I can 'Up My Salary' just like the name states. 
        There are so many options that I was unaware of until today. 
        Thank you so much for your help Zana! You are truly amazing.`,
        author:'Deity Lashaa',
        title:'',
        rating:5
      
    },
    {
      body:
        `Zana reviewed my resume and immediately provided invaluable advice and solutions with a no-fluff approach, 
        which drew me to her services in the first place.  
        I highly recommend!`,
      author:'Vetoya Smith',
      title:'',
      rating:5
      
    },
    {
      body:
        `Company is super efficient and highlighted my skills and experience to be attractive to top tier employers. 
        A direction I didn’t even see possible… Looking forward to recommending company services and working on the build out of my portfolio…
        `,
      author:'Husain Wakil',
      title:'',
      rating:5
    },
    {
      body:
        `Zana has been pivotal in helping me change my career path from retail to corporate America.  
        I would recommend her to anyone trying to do the same. 
        As I continue in my career goals, I will continue to work with her as her advice is invaluable.`,
      author:'Kathleen Pearson',
      title:'',
      rating:5
    },
    {
      body:
        `The feedback I got was insightful, beneficial and helped make me marketable to top earning employers. 
        Zana’s first hand knowledge landed me a job that I never saw myself having, 
        making money I hadn’t imagined and creating experiences and connections with people that aren’t normally in my inner circle.
        Keep in mind that I don’t have a formal college degree! Taking the course and utilizing the tools and suggestions provided by Zana allowed me to [not only] boost my annual salary,
        but also put me in a position where I view upward mobility [in companies] a bit differently; I know where I am there’s room for me to increase what I make every single year! Very true to the name, I’d highly recommend! 👍🏾`,
      author:'Safi Musgrove',
      title:'',
      rating:5
    },
    {
      body:
        `Zana was so helpful. She took the time to explain everything I needed help with to enhance my resume. 
        She was efficient and she answered all of my questions. 
        I highly recommend her for any help you need with career coaching and resume building.`,
      author:'Doniqua Keith',
      title:'',
      rating:5
    },
    {
      body:
        `UpMySalary really gave me the push I needed. The consultant worked with me over a year to get me that increase in pay I desired. 
        I got help with my resume and mock one on one interviews on how to succeed in tough interviews. 
        This program gives you the direction you need with an experienced consultant guiding you along the way to success!!!
        I highly recommend this program :)
        `,
      author:'Shania M',
      title:'',
      rating:5
    },
    {
      body:
        `Zana really connected with me and gave me some awesome pointers. She really listens to your concerns.
        `,
        author:'Esther Edwards',
        title:'',
        rating:5
    },
]

const reviews2 = [
  {
    title: 'It really works.',
    body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
    author: 'CrazyInvestor',
    rating: 5,
  },
  {
    title: 'You need this app.',
    body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
    author: 'CluelessButRich',
    rating: 5,
  },
  {
    title: 'This shouldn’t be legal.',
    body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
    author: 'LivingDaDream',
    rating: 5,
  },
  {
    title: 'Screw financial advisors.',
    body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
    author: 'JordanBelfort1962',
    rating: 5,
  },
  {
    title: 'I love it!',
    body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
    author: 'MrBurns',
    rating: 5,
  },
  {
    title: 'Too good to be true.',
    body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
    author: 'LazyRich99',
    rating: 5,
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
    author: 'SarahLuvzCash',
    rating: 5,
  },
  {
    title: 'Bought an island.',
    body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
    author: 'ScroogeMcduck',
    rating: 5,
  },
  {
    title: 'No more debt!',
    body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
    author: 'BruceWayne',
    rating: 5,
  },
  {
    title: 'I’m 13 and I’m rich.',
    body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
    author: 'RichieRich',
    rating: 5,
  },
  {
    title: 'Started an investment firm.',
    body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
    author: 'TheCountOfMonteChristo',
    rating: 5,
  },
  {
    title: 'It’s like a superpower.',
    body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
    author: 'ClarkKent',
    rating: 5,
  },
  {
    title: 'Quit my job.',
    body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
    author: 'GeorgeCostanza',
    rating: 5,
  },
  {
    title: 'Don’t download this app',
    body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
    author: 'JeffBezos',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-blue-900' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className=" relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20  sm:pt-32 "
    >
      <Container >
      <div className='text-center mx-auto max-w-4xl'>
      <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
          Some kind words from early clients...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600 italic">
          Being able to have worked with such a passionate group of people and seeing the impact that this business has made
          in their lives means so much to me and l am grateful.
        </p>
        </div>
        <ReviewGrid />
      </Container>
    </section>
  )
}
