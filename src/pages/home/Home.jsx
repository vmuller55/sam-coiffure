import { useEffect, useState} from 'react'
import Header from "../../components/header/Header"
import Adress from "../../components/infos/Adress"
import AppearingComponent from "../../components/sideEffect/sideEffect"
import Horaires from "../../components/content/horaires/Horaires"
import Cost from "../../components/content/cost/Cost"
import Footer from "../../components/footer/Footer"
import ImageSlider from "../../components/gallery/Gallery"
import PlanityButton from "../../components/planityButton/planityButton"
import DescendingArrow from '../../components/infoArrow/infoArrow'

import './home.css'


const Home = () => {
    const images = [
        '/images/salon.jpg',
        '/images/salon.webp',
    ];

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let breakpoint;
  if (screenWidth >= 900) {
    breakpoint = 200;
  } else {
    breakpoint = 1200; // Adjust the factor as needed
  }

    return(
        <div className="homeContainer">
            <Header />
            <div className="photo-gallery">
                <ImageSlider images={images} />
            </div>
            <Adress />
            {screenWidth < 800 
              ? 
                (
                  <DescendingArrow/>
                )
              :
                (
                  ''
                )
            }
            <div className="contentWrapper">
                <AppearingComponent breakpoint={200} direction={"left"} content={<Horaires/>}/>
                <AppearingComponent breakpoint={breakpoint} direction={"right"} content={<Cost/>}/>
            </div>
            <PlanityButton/>
            <Footer/>
        </div>
        
    )
}

export default Home