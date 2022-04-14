import beansLogo from '../../resources/svg/Beans logo-1.svg';

import './beansLogo.css';

const BeansLogo = ({top, left}) => {
    return (
        <img src={beansLogo} alt="logo" className="beans-logo" style={{top:`${top}px`, left:`${left}px`}}/>
    )
}

export default BeansLogo;