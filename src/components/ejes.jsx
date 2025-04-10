import Tarjeta from './tarjeta'

import manos from '../assets/manos.svg'
import rompecabezas from '../assets/rompecabezas.svg'
import comunidad from '../assets/comunidad.svg'
import perfil from '../assets/perfil.svg'

let tarjetas = [
    {
        imagen: manos,
        titulo: 'HUMANIDAD',
        texto: 'Que la persona pueda recuperar su proyecto de vida, sobre todo la autonomía y libre determinación, poniendo foco en una política seria y responsable de cuidado a los adultos mayores.',
    },
    {
        imagen: perfil,
        titulo: 'ENVEJECIMIENTO ACTIVO Y SALUDABLE',
        texto: 'Una mente sana en un cuerpo sano, pero también con salud emocional sostenido en las relaciones y los vínculos. Es un proceso intergeneracional mediante la cooperación y participación activa de la sociedad.',
    },
    {
        imagen: rompecabezas,
        titulo: 'POLÍTICAS PÚBLICAS',
        texto: 'El diseño de gestiones estatales en todos sus niveles para la construcción de una comunidad integrada, partiendo de la infraestructura hasta la contención a sus vecinos.',
    },
    {
        imagen: comunidad,
        titulo: 'ECONOMÍA PLATEADA',
        texto: 'Una oportunidad comercial para generar productos y servicios que, además de mejorar la situación de los adultos, permiten la movilización del sistema económico.',
    },
]


function Ejes(){
    return(
        <div className="grande:mt-40 mt-50 xl:mx-20 mx-10" id='ejes'>
            <h3 className="mb-5 sm:mx-16 mx-0 text-dibujos grande:text-5xl text-4xl sm:text-left text-center cahuenga">Ejes fundamentales</h3>
            <div className="grid sm:grid-cols-4 grid-cols-1 xl:my-20 my-10">
                {tarjetas.map((contenido) =>{
                    return <Tarjeta imagen={contenido.imagen} titulo={contenido.titulo} texto={contenido.texto} />
                })}
            </div>
        </div>
    )
}

export default Ejes
