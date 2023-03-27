import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import LogoText from "../../assets/logo__text.svg"
import Avatar from "../../assets/images/avatar.jpg"
import "./Navigation.css"

const Navigation = () => {
    return (
        
        <nav className="navigation">
            <div className="container">
                <Link to='/' className="navigation__brand"> 
                    <span className="logoImage">
                        <img src={Logo} alt="shopmore logo"/>
                    </span>
                    <span className="logoText">
                        <img src={LogoText} alt="shopmore logoText"/>
                    </span>
                </Link>

                <ul className="menu">
                    <li className="menu__item">
                        <NavLink to='/' className="menu__link">Home</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to='/product' className="menu__link">Product</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to='/about' className="menu__link">About</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to='/contact' className="menu__link">Contact</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to='/faq' className="menu__link">FAQ</NavLink>
                    </li>
                    <hr className="vertical"/>
                    <li className="user">
                        <span className="user__name">Zara</span>
                        <img src={Avatar} className="user__image" alt="avatar" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;