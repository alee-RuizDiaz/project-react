import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container p-3">
                <div className='msa mx-auto mb-4 mb-lg-0 mx-lg-0'>
                    <Link to={'/'} className='tecno'>
                        <span className='logo'>Tecno</span><span className='logo1 h5'>C</span><span className='logo'>ommerce</span>
                    </Link>
                </div>
                <div>
                    <NavLink to={'/category/celular'} className={({isActive}) => isActive ? 'ActiveOption mx-3' : 'Option mx-3' }  >Celulares</NavLink>
                    <NavLink to={'/category/notebook'} className={({isActive}) => isActive ? 'ActiveOption mx-3' : 'Option mx-3' }>Notbooks</NavLink> 
                    <NavLink to={'/category/tablet'} className={({isActive}) => isActive ? 'ActiveOption mx-3' : 'Option mx-3' }>Tablet</NavLink>
                </div>
                <div className='me-2'>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;  