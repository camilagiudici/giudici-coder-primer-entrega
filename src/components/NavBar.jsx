import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'
import CartWidget from './CartWidget'
const NavBar = () =>{
    return(
        <nav className="nav-container">
            <NavLink className="nav-link"to="/">Halcom🪽 </NavLink>
            <NavLink className="nav-link"to="/category/Ofertas">Ofertas</NavLink>
            <NavLink className="nav-link"to="/category/Ollas y Sartenes">Ollas y Sartenes</NavLink>
            <NavLink className="nav-link"to="/category/Baterias">Baterias</NavLink>
            <NavLink className="nav-link"to="/category/Accesorios">Accesorios</NavLink>

            <CartWidget/>
        </nav>
    )
}

export default NavBar