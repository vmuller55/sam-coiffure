import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='mention' ><Link to={"/mention"} style={{textDecoration : "none", color : "inherit", cursor : "pointer"}}>Mention légales</Link></div>
            <div className='contact'>Contact</div>
        </footer>
    )
}

export default Footer