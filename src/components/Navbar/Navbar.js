import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebase';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })

            setCategories(categoriesAdapted)

        })
    }, [])

    return (
        <nav className="navbar bg-light">
            <div className="container p-3">
                <div className='msa mx-auto mb-4 mb-lg-0 mx-lg-0'>
                    <Link to={'/'} className='tecno'>
                        <span className='logo'>Tecno</span><span className='logo1 h4'>C</span><span className='logo'>ommerce</span>
                    </Link>
                </div>
                <div>
                    {
                        categories.map(cat => (
                            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption mx-2 mx-lg-3' : 'Option mx-2 mx-lg-3' }>{cat.label}</NavLink>
                        ))
                    }
                </div>
                <div className='me-2 me-lg-2'>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;  