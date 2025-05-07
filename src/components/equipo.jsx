import personaJuridica from '../assets/PlenaviPJ.pdf'
import arcaCertificado from '../assets/ARCA_Certificado.pdf'

function Equipo(){
    function onResumeClick(){
        window.open(Pdf);
      }
    return(
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 grande:mx-24 xl:ml-20 lg:ml-15 ml-8 lg:my-7 mt-7">
            <div className='lg:mb-0 mb-8'>
                <h4 className="cahuenga text-dibujos text-4xl font-bold leading-11">La transparencia <br/> es fundamental</h4>
                <p className="text-textogris mt-4 font-medium text-2xl leading-9 lato">
                    <a href={personaJuridica} target='_blank'>Personería jurídica.</a> <br/>
                    <a href={arcaCertificado} target='_blank'>Certificado ARCA.</a>
                </p>
            </div>
            <div className=''>
                <h4 className="cahuenga text-dibujos text-4xl font-bold">Nuestro equipo</h4>
                <p className="text-textogris mt-4 font-medium text-2xl leading-9 lato">
                    Presidente Daniel Cuggino <br/>
                    Director Ejecutivo Francisco Cuggino
                </p>
            </div>
            <div className=''>
                <h4 className="cahuenga text-dibujos text-4xl font-bold">Nos acompañan</h4>
            </div>
        </div>
    )
}

export default Equipo
