import style from '../Header/Header.module.scss'
import {Nav} from '../Nav/Nav'
// Array til nav - viser path til den side man klikker ind på


const arrNav = [
    { name: 'Home', path: '/'},
    { name: 'Om os', path: '/om-os'},
    { name: 'Resturanter/Cafer', path: '/Resturanter'},
    { name: 'Kontakt', path: '/kontakt'},
  

 
 
 ]

export const Header = (props) => {
	return (
        <header> 
                  <Nav navItems ={arrNav}/>
                  <article>
                  <h1>FoodExperiences</h1>
                  <p>Find din næste, nye madoplevelse nær dig!</p>
                  </article>
         </header>
	)
}