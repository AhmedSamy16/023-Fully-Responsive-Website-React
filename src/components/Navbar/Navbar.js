import { useState, useEffect } from 'react'
import "./navbar.css"
import { DiTypo3 } from "react-icons/di"
import { FaBars, FaTimes } from "react-icons/fa"
import navData from "./nav-data"
import Button from '../Button/Button'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const [showButton, setShowButton] = useState(true)
    
    const checkButton = () => {
        if (window.innerWidth <= 960) {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }

    useEffect(() => {
        checkButton()
    }, [])
    useEffect(() => {
        window.addEventListener('resize', checkButton)
        return () => window.removeEventListener('resize', checkButton)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth])
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <a href='/' className='navbar-logo'>
                    TRVL <DiTypo3 />
                </a>
                <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                    {clicked ? <FaTimes className='logo-icon' /> : <FaBars className='logo-icon' />}
                </div>
                <ul className={`nav-menu ${clicked && 'active'}`}>
                    {
                        navData.map((item, index) => {
                            const { path, className, text } = item
                            return (
                            <li className='nav-item' key={index}>
                                <a href={path} className={className} onClick={() => setClicked(false)}>
                                    {text}
                                </a>
                            </li>
                            )
                        })
                    }
                </ul>
                {showButton && <Button buttonStyle='btn-medium'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar