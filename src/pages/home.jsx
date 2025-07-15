import Navbar from "../components/navbar";
import Image1 from "../components/image1";
import VideoSection from "../components/videoSection";
import Image2 from "../components/image2";
import Ejes from "../components/ejes";
import Image3 from "../components/image3";
import Equipo from "../components/equipo";
import Footer from "../components/footer";

function Home(){
    return(
        <div className='w-screen h-screen'>
            <Navbar />
            <Image1 />
            <VideoSection />
            <Image2 />
            <Ejes />
            <Image3 />
            <Equipo />
            <Footer />
        </div>
    )
}

export default Home
