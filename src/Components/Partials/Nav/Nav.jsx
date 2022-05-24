import style from '../Nav/Nav.module.scss'
import {NavLink } from 'react-router-dom'
import arrNavItems from '../../../assets/data/arrNavItems';
import logo from '../../../assets/images/pngwing.com.png';

export const Nav = props => {
   
	return (
        <nav >
            <img src={logo} alt="logo" />
        <ul>
            {arrNavItems.map((item, key) => {
                //Hvis display er true vis 
                 if(item.display) {
                return(
                    <li key={key}>
                        {/* Smider sti og title ind fra vores array og sætter den sammen med vores navn/router */}
                        <NavLink to={item.path}>{item.title}</NavLink></li>
                )
                 // Ellers vis null
            } else{
                return null
            }
            })}
            
        </ul>
    </nav>
	)
}