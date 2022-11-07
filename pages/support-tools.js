import Header from "../public/components/header";
import Footer from "../public/components/footer";
import VideoTools from "../public/components/video-tools";

export default function SupportTools() {
    return (
        <>
        <div className="pt-5">
            <Header/>
        </div>
        <div className="pt-5 pb-36 mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="mt-20">
            <h1>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-4xl">
                    Candidate Support Tools
                </span>
            </h1>
            </div>
            <div className="mt-20">
                <VideoTools/>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}