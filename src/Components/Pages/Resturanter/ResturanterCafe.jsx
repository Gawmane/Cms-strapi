import { AllRestaurant} from "../../Elements/GetResturant/allResturant"
import { Navigation } from "../../Partials/Nav/Navigation"
import style from "../../Elements/GetResturant/GetResturant.module.scss"
export const Restaurant = () =>{
    return(
        <section >
         <Navigation/>
         <article className={style.restruant}>
        <h2>Resturanter</h2>
        <p>Herunder ses en liste over vores resturanter.</p>
        <p>Klik ind og få mere info omkring stedet eller klik driekte ind på deres hjemmeside</p>
        <p> Søger du noget specilt? Brug søgefunktionen og få et bedre udvalg </p></article>
        <AllRestaurant/> 
      </section>
    )
}