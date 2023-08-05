import './cost.css'

const Cost = () => {
    return(
        <div className="costContainer">
            <h2>Mes tarifs</h2>
            <div className="tarifCategorie">
                <div className="coupeContainer">
                    <h3>Coupes</h3>
                    <ul className="coupeList">
                        <li className="coupe">Coupe homme<br/>13€</li>
                        <li className="coupe">Coupe enfant<br/>10€</li>
                        <li className="coupe">Coupe et barbe<br/>18€</li>
                        <li className="coupe">Shampoing<br/>2€</li>
                    </ul>
                </div>
                <div className="barbeContainer">
                    <h3>Barbe</h3>
                    <ul className="barbeList">
                        <li className="barbe">Barbe<br/>7€</li>
                        <li className="barbe">Traçage de barbe<br/>5€</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cost