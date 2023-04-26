import'./estilo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
 import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {Link}from "react-router-dom"

import Logo from'../../../../imagens/logo1.png'

function logo(){
    return (
        <>
        <div className='tudo'>
            <div className='logo'>
                <img
                    src={Logo}
                    className='logo-img'
                ></img>
                <div className='texto'>
                    Grand Music
                </div>

            </div><><ul className='opções'>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="Login">Login</Link></li>
                <li><Link to="Contact">Contato </Link></li>

            </ul><div className='icons'>
                        <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                        <i><FontAwesomeIcon icon={faHeart} /></i>
                        <i><FontAwesomeIcon icon={faCartShopping} /></i>

                    </div></>
            </div>
                </>

        
            
    )
}
export default logo