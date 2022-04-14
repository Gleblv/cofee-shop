import Header from "../Header/Header";
import BeansLogo from "../BeansLogo/beansLogo";
import Logo from '../Logo/Logo';

import "./Main.css";

import mainBg from '../../resources/img/Main bg.jpg' 

function Main () {
    return (
        <div className="main-page">
            <img src={mainBg} alt="main-bg-img" className="main-bg-img"></img>
            <Logo top={35} left={148}/>
            <Header/>
            <div className="header-title">Everything You Love About Coffee</div>
            <BeansLogo top={245} left={620}/>
            <div className="header-text">We makes every day full of energy and taste</div>
            <div className="header-question">Want to try our beans?</div>
            <btn className="header-more-btn">
                <span className="header-more-btn-text">More</span>
            </btn>
        </div>
    )
}

export default Main;