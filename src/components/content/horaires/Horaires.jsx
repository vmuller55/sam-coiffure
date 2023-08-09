import './horaires.css'

const Horaires = () => {
    return(
        <div className="horairesContainer">
            <h2>Horaires</h2>
            <div className="horraires">
                <ul className='week'>
                    <li className="day">Lundi<br/> <span className='fontHours'>14H00 - 19H00</span></li>
                    <li className="day">Mardi<br/> <span className='fontHours'>10H00 - 19H00</span></li>
                    <li className="day">Mercredi<br/> <span className='fontHours'>10H00 - 19H00</span></li>
                    <li className="day">Jeudi<br/> <span className='fontHours'>10H00 - 19H00</span></li>
                    <li className="day">Vendredi<br/> <span className='fontHours'>10H00 - 19H00</span></li>
                    <li className="day">Samedi<br/> <span className='fontHours'>10H00 - 19H00</span></li>
                    <li className="day">Dimanche<br/> <span className='fontHours'>Fermé</span></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Horaires