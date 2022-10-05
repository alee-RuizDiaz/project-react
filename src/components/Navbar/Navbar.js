import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Button from '../Button/Button';

const NavBar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container p-3">
                <div>
                    TecnoCommerce
                </div>
                <div>
                    <Button content='Celulares' clases='mx-3 button '/>
                    <Button content='Netbooks' clases='mx-3 button '/>
                    <Button content='Tablet' clases='mx-3 button '/>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;  