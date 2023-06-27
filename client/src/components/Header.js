import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <ul className='header'>
                    <li><NavLink to='/'>Home (Logo here)</NavLink></li>
                    <li><NavLink to='/about'>About Me</NavLink></li>
                    <li><NavLink to='/contact'>Contact Me</NavLink></li>
                    <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header;