import Link from 'next/link';
import Image from 'next/image';
import BookCover from '../assets/book-cover.jpg';
const products = [
    {
      id: 1,
      name: 'Ebook 1',
      href: 'ebook/1',
      price: '$256',
      imageSrc: BookCover,
      imageAlt: 'Book Cover',
    },
    {
      id: 2,
      name: 'Ebook 2',
      href: 'ebook/2',
      price: '$32',
      imageSrc: BookCover,
      imageAlt: 'Book Cover',
    },
  ]
  
  export default function EbookShop() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
                    objectFit='contain'
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
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
  