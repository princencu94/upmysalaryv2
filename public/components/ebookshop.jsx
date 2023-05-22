import Link from 'next/link';
import Image from 'next/image';
import BookCover from '../assets/ebook-cover.jpg';
import ChatGptCover from '../assets/Chatgpt.jpg';
const products = [
    {
      id: 'staffing-companies',
      name: 'Staffing Companies(Ebook)',
      href: 'ebooks/staffing-companies',
      price: '$19.99',
      imageSrc: BookCover,
      imageAlt: 'Staffing Companies',
    },
    {
      id: 'supercharge-your-income-with-chatgpt',
      name: 'Supercharge Your Income With ChatGPT(Ebook)',
      href: 'ebooks/supercharge-your-income-with-chatgpt',
      price: '$9.99',
      imageSrc: ChatGptCover,
      imageAlt: 'Staffing CompaniesSupercharge Your Income With ChatGPT(Ebook)',
    },
  ]
  
  export default function EbookShop() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl  px-0 sm:py-24 sm:px-4 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Ebooks</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96 overflow-hidden">
                  <Image
                    src={product.imageSrc}
                    width={500}
                    height={550}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-lg font-bold text-blue-900">
                    <Link href={product.href}>
                        <a >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        </a>
                    </Link>
                    
                  </h3>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  