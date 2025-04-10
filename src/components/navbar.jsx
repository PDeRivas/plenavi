import logo from '../assets/logo.png'
import whatsapp from '../assets/whatsapp.svg'

export default function Navbar() {
    return(
        <div className="w-full top-0 sm:mb-0 mb-10">
            <nav className='w-full flex sm:flex-row flex-col items-center justify-between px-6 bg-background text-textogris'>
                <a href="/"><img className='xl:ml-5 grande:h-80 grande:w-130 xl:h-60 xl:w-100 h-40 w-80 object-fill' src={logo} alt="" /></a>
                <ul className='sm:mb-0 mb-10 flex items-center xl:space-x-10 space-x-6 medium font-medium text-center grande:text-3xl xl:text-2xl text-xl lato'>
                    <li><a href="#meta">Meta</a></li>
                    <li><a href="#ejes">Ejes Fundamentales</a></li>
                    <li><a href="#sumate">Sumate</a></li>
                </ul>
                <div className='flex items-center'>
                    <img className='grande:w-25 xl:w-16 w-14' src={whatsapp} alt="" />
                    <div className='font-bold italic'>
                        <p className='grande:text-lg xl:text-md text-sm'>ANIMATE! SUMATE A LA FUNDACIÓN</p>
                        <p className='grande:text-2xl xl:text-xl text-lg'>+54 9 358 501 1703</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
