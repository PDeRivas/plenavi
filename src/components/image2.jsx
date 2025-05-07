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
        <section className='relative grande:h-[820px] xl:h-[800px] lg:h-[700px] h-140 flex flex-col text-white'>
            <div className="absolute inset-0  lg:brightness-100 brightness-72 lg:bg-[length:160%] bg-[length:240%] sm:bg-[position:20%_30%] bg-[position:10%_30%]" style={{ backgroundImage: `url(${background_image})` }}/>
            <div className='z-10 xl:ml-32 lg:ml-20 grande:mt-50 lg:mt-35 mt-5 lg:text-left text-center'>
                <h4 className='font-bold grande:text-5xl tablet:text-4xl text-3xl sm:mb-10 mb-5 cahuenga'>Una nueva oportunidad</h4>
                <p className='lg:mx-0 mx-6 xl:leading-13 lg:leading-11 tablet:text-3xl text-2xl lato lg:w-125'>
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
            <img className='absolute grande:left-200 xl:left-180 lg:left-150 left-1/2 lg:translate-x-0 translate-x-[calc(-50%)] grande:top-120 xl:top-118 md:top-80 sm:top-90 top-105 grande:w-60  sm:w-45  w-30 ' src={pareja} alt="" />
        </section>
    )
}

export default Image2
