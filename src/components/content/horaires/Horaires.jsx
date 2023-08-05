import './horaires.css'

const Horaires = () => {
    return(
        <div className="horairesContainer">
            <h2>Mes horaires</h2>
            <div className="horraires">
                <ul className='week'>
                    <li className="day">Lundi<br/> 14H00 - 19H00</li>
                    <li className="day">Mardi<br/> 10H00 - 19H00</li>
                    <li className="day">Mercredi<br/> 10H00 - 19H00</li>
                    <li className="day">Jeudi<br/> 10H00 - 19H00</li>
                    <li className="day">Vendredi<br/> 10H00 - 19H00</li>
                    <li className="day">Samedi<br/> 10H00 - 19H00</li>
                    <li className="day">Dimanche<br/> Fermé</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Horaires