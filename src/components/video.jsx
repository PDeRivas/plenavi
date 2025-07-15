import Evento from '../assets/evento.mp4'
import { useEffect } from 'react'

function Video({ onClose }){
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key == 'Escape') {
            onClose()
          }
        }
    
        document.addEventListener('keydown', handleKeyDown)
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        }
      }, [onClose])

    return(
        <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[800px] mx-4">
            <video
                src={Evento}
                controls
                className="w-full h-auto rounded-lg shadow-2xl"
            />
            </div>
        </div>
    )
}

export default Video