import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">Household’s Food Inventory</Link>
          </div>
        </nav>
    )
}

export default Nav