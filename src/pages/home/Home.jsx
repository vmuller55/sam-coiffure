import Header from "../../components/header/Header"
import salonImg from '../../assets/images/salon.jpg'
import Adress from "../../components/infos/Adress"
import AppearingComponent from "../../components/sideEffect/sideEffect"
import Horaires from "../../components/content/horaires/Horaires"
import Cost from "../../components/content/cost/Cost"
import Footer from "../../components/footer/Footer"

import './home.css'


const Home = () => {
    return(
        <div className="homeContainer">
            <Header />
            <div className="salonImg"> 
                <img src={salonImg} alt="salon"></img>
            </div>
            <Adress />
            <AppearingComponent breakpoint={200} direction={"left"} content={<Horaires/>}/>
            <AppearingComponent breakpoint={800} direction={"right"} content={<Cost/>}/>
            <Footer/>
        </div>
        
    )
}

export default Home