import logo from '../assets/logo.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

function Footer(){
    return(
        <footer className='flex flex-row justify-end items-center grande:mr-10 mr-7'>
            <div className='grande:mr-10 mr-8 lato'>
                <p className='text-textogris font-medium grande:text-2xl text-xl'>Río Cuarto, Córdoba.</p>
                <p className='text-textogris font-bold grande:text-2xl text-xl latobolditalic'>+54 9 358 501 1703</p>
                <p className='text-textogris font-medium grande:text-2xl text-xl'>fundacionplenavi@gmail.com</p>
                <div className='mt-3 flex items-center'>
                    <img className='grande:w-12 w-8 mx-1' src={facebook} alt="" />
                    <img className='grande:w-12 w-8 mx-1' src={instagram} alt="" />
                    <img className='grande:w-12 w-8 mx-1' src={youtube} alt="" />
                    <p className='text-textogris font-medium grande:text-2xl text-xl'>Fundacion Plenavi</p>
                </div>
            </div>
            <img className='grande:h-70 h-58 grande:w-100' src={logo} alt="" />
        </footer>
    )
}

export default Footer
