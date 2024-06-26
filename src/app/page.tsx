import '@/../styles/home.css';
import '@/../styles/page.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center align-middle md:mt-32 justify-between">
        <div className=''>
            <div id='title' className='p-4 md:p-2 mb-8 md:mt-12'>
                <h1>Welcome to my portfolio</h1>
            </div>
            <div className='px-10'>
                <div className='
                    mb-8 
                    mr-16 
                    bg-gray-700 
                    rounded 
                    rounded-tl-2xl 
                    rounded-tr-2xl 
                    rounded-br-2xl 
                    text-white
                    p-3'>
                    <p>Oli is a web developer with 2 years of experience working in the Energy and Network industries.</p>
                    <p>He takes care to design and build  responsive and accessible web pages and applications. 🤓</p>
                </div>
                <div className='
                    ml-16 
                    bg-sky-800 
                    rounded-bl-2xl
                    rounded-tl-2xl 
                    rounded-tr-2xl 
                    rounded-br
                    text-white
                    p-4 '>
                    <p>For any enquiries, send me an <Link href="">e-mail</Link>, or message me on <Link href="">Whatsapp</Link>/<Link href="http://signal.org/install">Signal</Link>.</p>
                </div>
            </div>
        </div>
    </main>
  );
}
