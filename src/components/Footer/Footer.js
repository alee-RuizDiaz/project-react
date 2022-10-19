
import { Link } from "react-router-dom"
import git from './assets/git.svg'
import linkedin from './assets/linkedin.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid bg-light mt-lg-5">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center p-3 py-4">
                <div>
                    <Link to={'/'} className='tecno'>
                        <span className='logo'>Tecno</span><span className='logo1 h5'>C</span><span className='logo'>ommerce</span>
                    </Link>
                    <span className="mb-3 mb-md-0 text-muted ms-2">&copy; 2022</span>
                </div>
                <div>
                    <a href="https://github.com/alee-RuizDiaz" target={"_blank"} rel="noopener noreferrer"><img className="mx-3 icon" src={git} alt='git'/></a>
                    <a href="https://www.linkedin.com/in/alee-ruiz/" target={"_blank"} rel="noopener noreferrer"><img className="icon" src={linkedin} alt='linkedin'/></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer