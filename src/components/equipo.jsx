import personaJuridica from '../assets/PlenaviPJ.pdf'
import arcaCertificado from '../assets/ARCA_Certificado.pdf'

function Equipo(){
    function onResumeClick(){
        window.open(Pdf);
      }
    return(
        <div className="grid grid-cols-3 grande:mx-24 xl:ml-20 ml-15 my-7">
            <div>
                <h4 className="cahuenga text-dibujos grande:text-5xl text-4xl font-bold grande:leading-14 leading-11">La transparencia <br/> es fundamental</h4>
                <p className="text-textogris mt-4 font-medium grande:text-3xl text-2xl leading-10 lato">
                    <a href={personaJuridica} target='_blank'>Personería jurídica.</a> <br/>
                    <a href={arcaCertificado} target='_blank'>Certificado ARCA.</a>
                </p>
            </div>
            <div>
                <h4 className="cahuenga text-dibujos grande:text-5xl text-4xl font-bold">Nuestro equipo</h4>
                <p className="text-textogris mt-4 font-medium grande:text-3xl text-2xl leading-10 lato">
                    Presidente Daniel Cuggino <br/>
                    Director Ejecutivo Francisco Cuggino
                </p>
            </div>
            <div>
                <h4 className="cahuenga text-dibujos grande:text-5xl text-4xl font-bold">Nos acompañan</h4>
            </div>
        </div>
    )
}

export default Equipo
