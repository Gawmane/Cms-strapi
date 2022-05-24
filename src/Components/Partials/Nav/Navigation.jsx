
import {Nav} from '../Nav/Nav'
// Array til nav - viser path til den side man klikker ind på


const arrNav = [
    { name: 'Home', path: '/'},
    { name: 'Om os', path: '/om-os'},
    { name: 'Resturanter/Cafer', path: '/Resturanter'},
    { name: 'Kontakt', path: '/kontakt'},
  

 
 
 ]

export const Navigation = (props) => {
	return (
        <div> 
                  <Nav navItems ={arrNav}/>
                  
         </div>
	)
}