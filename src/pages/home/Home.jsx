import Header from "../../components/header/Header"
import Adress from "../../components/infos/Adress"
import AppearingComponent from "../../components/sideEffect/sideEffect"
import Horaires from "../../components/content/horaires/Horaires"
import Cost from "../../components/content/cost/Cost"
import Footer from "../../components/footer/Footer"
import ImageSlider from "../../components/gallery/Gallery"

import './home.css'


const Home = () => {
    const images = [
        '/images/salon.jpg',
        '/images/salon.webp',
    ];

    return(
        <div className="homeContainer">
            <Header />
            <div className="photo-gallery">
                <ImageSlider images={images} />
            </div>
            <Adress />
            <AppearingComponent breakpoint={200} direction={"left"} content={<Horaires/>}/>
            <AppearingComponent breakpoint={800} direction={"right"} content={<Cost/>}/>
            <Footer/>
        </div>
        
    )
}

export default Home