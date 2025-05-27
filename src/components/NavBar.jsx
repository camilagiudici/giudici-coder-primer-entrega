import '../css/NavBar.css'
import CartWidget from './CartWidget'
const NavBar =() => {
    return (
        <nav className="nav-container">
            <a className="nav-link" href="">Halcom Ofertas</a>
            <a className="nav-link" href="">Utencillos</a>
            <a className="nav-link" href="">Ollas y Cacerolas</a>
            <a className="nav-link" href="">Accesorios</a>

            <CartWidget/>
        </nav>
        
    )
}
export default NavBar