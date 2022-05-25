
//Routes
import {Home} from '../../Components/Pages/Home/Home';
 import {NotFound} from '../../Components/Pages/Error/Error';
import { OneRestaurant } from '../../Components/Elements/GetResturant/RestaruantDetails';
import { Restaurant } from '../../Components/Pages/Resturanter/ResturanterCafe';
import { About } from '../../Components/Pages/About/About';
import { Contact } from '../../Components/Pages/Contact/Contact';


//Array til vores navigation - router
const arrNavItems = [
    {
        title: 'Home',
        path: '/',
        element: <Home/>,
        display: true
    },
    {
        title: 'Om os',
        path: '/om-os',
        element: <About/>,
        display: true
    },
    
    {
        title: 'Resturanter/Cafer',
        path: '/resturanter',
       element: <Restaurant/>,
        display: true
    },
    {
        title: 'ResturantDetail',
        path: '/details/:id',
        element: <OneRestaurant/>,
        display: false
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
        element: <Contact/>,
        display: true
    },
    // Display false ved notfound for ikke at få den vist vi vores navigation 
    {
        title: 'NotFound',
        path: '*',
        element: <NotFound/>,
        display: false
    },
  
]

export default arrNavItems