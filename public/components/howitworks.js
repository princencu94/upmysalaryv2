import headerBg from '../assets/bg-head.jpg';

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
          "Once you are satisfied we send you the updated resume. Our professional writers will write you a resume that fits your specific needs. Moreover, we help you accelerate your hunt for the job by enabling you to apply for new opportunities with confidence.",
      },
      {
        id: 4,
        question: "Upgrade: LinkedIn Optimization",
        answer:
          "Besides offering a well-crafted resume, we optimize your LinkedIn profile. With your new, customized profile, you will connect with employers and recruiters, expand your network online, and improve your job prospects.",
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
      <div className="bg-blue-900 ">
        <div className="relative mx-auto max-w-7xl py-14 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">How does it Work?</h2>
            <p className="mt-4 text-gray-400">
                Our process begins by learning about your professional goals and learning more about you. From career coaching to resume building, we develop people professionally to heighten their market value. So, of all the services we offer, it comes down to your unique experience and being paired with the services that will be most impactful. 
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  