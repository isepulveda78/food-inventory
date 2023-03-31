import { Link } from 'react-router-dom'
import { Fragment } from 'react'
const Button = ({name, path}) => {
    return (
       <Fragment>
            <Link className="btn btn-info text-white text-decoration-none" to={path}>{name}</Link>
       </Fragment>
    )
}

export default Button