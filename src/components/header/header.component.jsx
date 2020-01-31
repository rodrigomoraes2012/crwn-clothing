import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'

import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) =>(
    <div className='header'>
        <BrowserRouter>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
        
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>

                {
                    currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='/SIGN'>SIGN IN</Link>)
                }

            </div>
        </BrowserRouter>
    </div>
)

export default Header