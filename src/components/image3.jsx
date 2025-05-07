import { useState } from 'react';

import background_image from '../assets/todos.webp'
import dialogo from '../assets/dialogo.svg'

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + background_image + ")",
    backgroundRepeat: "no-repeat",

};

function Image3(){
    const [contactinfo, setContactinfo] = useState(false)

    const changeContact = ()=>{
        setContactinfo(!contactinfo)
    }

    return(
        <section className='relative w-screen grande:h-[900px] xl:h-[800px] lg:h-[700px] h-160 flex flex-col text-white' id='sumate'>
            <div className="absolute inset-0 bg-cover bg-center brightness-70" style={ sectionStyle }/>
            <div className='xl:ml-32 lg:ml-20 mt-14 cahuenga z-10 lg:text-left text-center'>
                <h4 className='font-bold grande:text-5xl tablet:text-4xl text-3xl lg:mb-10 mb-5'>Necesitamos de todos</h4>
                <p className='lg:mx-0 mx-6 lg:leading-12 tablet:text-3xl text-2xl font-light lato xl:w-130 lg:w-110'>
                    Compartir lo que hacemos es parte de
                    nuestro propósito, por eso queremos
                    llegar a diferentes puntos de la
                    provincia y del país con el fin de que
                    todos puedan conocer más acerca de
                    nuestro trabajo y sumar ayuda.
                    Escribínos por WhatsApp, por redes,
                    por mail. Contanos qué idea tenés para
                    ayudar a la Fundación.
                </p>
            </div>
            <img className='absolute z-50 cursor-pointer grande:left-200 xl:left-180 lg:left-140 left-1/2 lg:translate-x-0 translate-x-[calc(-50%)] xl:top-95 sm:top-100 top-125 grande:w-60 sm:w-45 w-30 pointer-events-none' src={dialogo} alt="" />
            <div className='absolute grande:left-300 xl:top-95 w-100 bg-background'>
                <a href=""></a>
            </div>
        </section>
    )
}

export default Image3
