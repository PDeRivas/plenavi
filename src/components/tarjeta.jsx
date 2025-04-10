function Tarjeta( {imagen, titulo, texto,} ){
    return(
        <div className="flex flex-col items-center px-9 text-center text-textogris">
            <img className="grande:w-32 w-29 mb-8" src={imagen} alt="" />
            <h5 className="mt-5 mb-3 grande:text-3xl xl:text-2xl text-xl">{titulo}</h5>
            <p className="grande:text-2xl xl:text-xl text-lg lato">{texto}</p>
        </div>
    )
}

export default Tarjeta
