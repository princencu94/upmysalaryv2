import Header from "../public/components/header";
import Footer from "../public/components/footer";
import EbookShop from "../public/components/ebookshop";
import Head from 'next/head';

export default function Ebooks() {
    return (
        <>
        <Head>
            <title>
                Ebooks
            </title>
            <meta
            name="description"
            content="A Variety of Ebooks written by Zana herself"
            key="desc"
            />
        </Head>
        <div className="sticky top-0 z-50">
            <Header/>
        </div>
        <div className="pt-5 pb-20 mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="mt-20">
            <h1>
                <span className="mt-2 mb-10 lg:mb-0 block text-center text-4xl font-bold leading-8 tracking-tight text-blue-900 sm:text-5xl lg:text-6xl">
                    Ebooks
                </span>
            </h1>
            </div>
            <div className="">
                <EbookShop/>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}