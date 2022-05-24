//Router
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import { AppRouter } from './Components/AppRouter/AppRouter';

//Components 
import {Main} from '../src/Components/Partials/Main/Main';
import {Footer} from '../src/Components/Partials/Footer/Footer';

//Style
import './App.module.scss';




function App() {
  return (
    <>
    {/* Router - Skal omfange de sider vi har på siden samt nav- skal være parents til header */}
    <Router>
    
    <Main>
      {/* Indsætter approuter inde i vores main da alt indhold skal ind under main (chrild) */}
      <AppRouter/>
      </Main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
