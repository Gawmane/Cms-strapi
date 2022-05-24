import { TeaserRestaurant } from "../../Elements/GetResturant/GetResturant"
import { Header } from "../../Partials/Header/Header"

import style from './Home.module.scss'

export const Home = () =>{
    return(
        <>
        <Header/>
        <h2>Resturanter</h2>
       <TeaserRestaurant/>
       
      </>
    )
}