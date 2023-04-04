import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SideNav = () => {
    const [food, setFood] = useState()
    const [grocery, setGrocery] = useState()

    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/'){
            setFood('active')
        }
        if(location.pathname === '/grocery'){
            setGrocery('active')
        }
    }, [])
    return (
        <nav className="nav flex-column nav-pills">
            <Link className={`nav-link ${food}`} aria-current="page" to="/">Food Inventory</Link>
            <Link className={`nav-link ${grocery}`} to="/grocery">Grocery List</Link>
        </nav>
    )
}

export default SideNav