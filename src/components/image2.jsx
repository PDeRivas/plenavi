import background_image from '../assets/oportunidad.webp'
import pareja from '../assets/pareja.svg'

var sectionStyle = {
    backgroundImage: "url(" + background_image + ")",
    backgroundSize: '160%', 
    backgroundRepeat: "no-repeat",
    backgroundPosition: '20% 30%',
};

function Image2(){
    return(
        <section className='relative sm:w-screen sm:h-screen sm:bg-cover bg-center flex flex-col text-white' style={ sectionStyle }>
            <div className='xl:ml-32 sm:ml-20 grande:mt-50 sm:mt-35 mt-0 sm:text-left text-center'>
                <h4 className='font-bold grande:text-5xl text-4xl mb-10 cahuenga'>Una nueva oportunidad</h4>
                <p className='xl:leading-13 leading-11 grande:text-3xl text-3xl lato w-125'>
                    Queremos construir un nuevo
                    paradigma de la tercera edad: de un
                    problema a atender, hacia una nueva
                    oportunidad. Este cambio de visión
                    implica gestionar las herramientas
                    tanto para quienes ya son +65 y
                    desean vivir plenamente, como para
                    aquellas nuevas generaciones.
                </p>
            </div>
            <div className='absolute grande:left-200 xl:left-180 left-150 grande:top-120 xl:top-118 top-90 flex flex-col bg-dibujos grande:w-60 grande:h-60 w-45 h-45 items-center justify-center rounded-3xl'>
                <img className='grande:w-35 w-30' src={pareja} alt="" />
                <p className='grande:text-4xl text-3xl font-bold cahuenga'>Acompañar</p>
            </div>
        </section>
    )
}

export default Image2
