import playbutton from '../assets/playbutton.svg'

function Video(){
    return(
        <div className='flex flex-col w-screen items-center justify-center mt-8' id='meta'>
            <img className='sm:w-30 w-20' src={playbutton} alt="" />
            <div className='my-5 text-center w-7/11 text-dibujos font-bold xl:text-4xl sm:text-3xl text-xl cahuenga'>
                <p>
                    En PLENAVI queremos mejorar las condiciones de las personas que hoy entran en
                    la etapa +65 años, y sentar las bases de una sociedad más justa para que, cuando
                    todos lleguemos a esa etapa, la podamos vivir de la forma más placentera.
                </p>
                <p className='xl:my-8 sm:my-6 my-0'>La vejez nos llega a todos. La diferencia está en cómo queramos vivirla.</p>
            </div>
        </div>
    )
}

export default Video
