import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import Container from './Container'


import logo from '../../img/costs_logo.png'

function Navbar(){
    return (
        <nav>
            <Container>
            <Link to="/">
              <img src={logo} alt='Costs'></img>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/company">Company</Link>
            <Link to="/newproject">New Project</Link>
            </Container>
        </nav>
    )
}
export default Navbar