import style from '../Footer/Footer.module.scss'
import logo from '../../../assets/images/pngwing.com.png';
import { SocialMedia } from './Links';
export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <p>&copy; 2022 FoodExperiences.com</p>
            <SocialMedia />
        </footer>
    )
}