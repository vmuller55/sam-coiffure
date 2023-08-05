import './adress.css'
import {BiPhone} from 'react-icons/bi'

import { SocialIcon } from 'react-social-icons';

const Adress = () => {
    return (
        <div className="adressContainer">
            <div className="adress">
                <h2>
                    <a href="https://www.google.fr/maps/place/Coiff'sam+bar+le+duc/@48.7729622,5.1570502,17z/data=!3m1!4b1!4m6!3m5!1s0x47eb7168bcdd9ea5:0x9e8a3440298119ba!8m2!3d48.7729587!4d5.1596251!16s%2Fg%2F11g2k1dxj6?entry=ttu">
                        1 rue voltaire 55000 Bar-le-Duc
                    </a>
                </h2>
                <h3><BiPhone /> 09 53 64 43 72</h3>
            </div>
            <div className="planity">
                <a href='https://www.planity.com/coiff-sam-bar-le-duc-55000'>Prendre RDV</a>
            </div>
            <div className="social">
                <h2>Mes réseaux : </h2>
                <SocialIcon url='https://www.instagram.com/sam.coiffeur.55/' style={{marginRight : "30px"}}></SocialIcon>
                <SocialIcon url='https://www.facebook.com/profile.php?id=100063521532125'></SocialIcon>
            </div>
        </div>
    )
}

export default Adress