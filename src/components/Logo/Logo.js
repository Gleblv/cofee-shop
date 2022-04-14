import logo from '../../resources/svg/Logo-1.svg';

import './Logo.css';

const Logo = ({top, left}) => {
    return (
        <img src={logo} alt="logo" className="logo" style={{top: `${top}px`, left: `${left}px`}}/>
    )
}

export default Logo;