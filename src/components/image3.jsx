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
        <section className='relative w-screen grande:h-[900px] xl:h-[800px] lg:h-[700px] bg-cover bg-center flex flex-col text-white' id='sumate'>
            <div className="absolute inset-0 bg-cover bg-center brightness-70" style={ sectionStyle }/>
            <div className='xl:ml-32 ml-20 mt-14 cahuenga z-10'>
                <h4 className='font-bold grande:text-5xl text-4xl mb-10'>Necesitamos de todos</h4>
                <p className='xl:leading-12 leading-12 xl:text-3xl text-3xl font-light lato xl:w-130 w-110'>
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
            <div onClick={changeContact} className='absolute z-50 cursor-pointer grande:left-200 xl:left-180 left-140 xl:top-95 top-100 flex flex-col bg-background grande:w-60 grande:h-60 w-45 h-45  items-center justify-center rounded-3xl'>
                <img className='grande:w-35 w-30 pointer-events-none' src={dialogo} alt="" />
                <p className='grande:text-4xl text-3xl font-bold text-dibujos cahuenga'>Hablemos</p>
            </div>
            <div className='absolute grande:left-300 xl:top-95 w-100 bg-background'>
                <a href=""></a>
            </div>
        </section>
    )
}

export default Image3
