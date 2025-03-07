import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to="/"> Home </Link>
            <Link to="/starships"> Starships </Link>
            <Link to="/films"> Films </Link>
            <Link to="/planets"> Planets </Link>
            <Link to="/people"> People </Link>
            <Link to="/species"> Species </Link>
            <Link to="/vehicles"> Vehicles </Link>
        </div>
    )
}

export default Nav