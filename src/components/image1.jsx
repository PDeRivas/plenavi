import background_image from '../assets/longevidad.webp'

var sectionStyle = {
    backgroundImage: "url(" + background_image + ")",
    backgroundSize: 'cover'
};

function Image1(){
    return(
        <section className="relative sm:w-screen sm:h-screen h-120 bg-cover bg-center flex flex-col justify-center items-center text-white" style={ sectionStyle }>
            <div 
            style={{clipPath: "polygon(0% 10%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 85%, 10% 85%, 10% 10%)"}}
            className='absolute top-2/5 border-4 sm:border-white border-transparent grande:w-285 grande:h-77 xl:w-200 xl:h-70 sm:w-180 sm:h-60'
            >
            </div>
            <div className='sm:mt-25 sm:mb-0 mb-30'>
                <p className="grande:text-8xl xl:text-7xl sm:text-6xl text-5xl font-bold cahuenga text-center sm:mr-20 xl:leading-30 sm:leading-25 leading-">+65. La nueva longevidad <br /> ya comenzó.</p>
            </div>
            <div className='absolute sm:left-1/2 grande:translate-x-[calc(-50%-35.5rem)] xl:translate-x-[calc(-50%-24.7rem)] sm:translate-x-[calc(-50%-22.5rem)] top-33/80 xl:translate-y-[calc(9.75rem)] translate-y-[calc(7.75rem)] bg-dibujos py-4 px-9 rounded-3xl'>
                <p className='grande:text-2xl xl:text-xl text-lg font-bold text-center'>DESAFIAMOS <br /> ESTERIOTIPOS</p>
            </div>
        </section>
    )
}

export default Image1
