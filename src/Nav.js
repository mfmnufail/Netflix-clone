import React,{useEffect,useState} from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{window.removeEventListener("scroll")}
    },[])
    return (
        <di className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src="http://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png"
                alt="netflix logo"
            />
            <img
                className='nav_avatar'
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="avatar logo"
            />
            
        </di>
    )
}

export default Nav
