import { FeedbackSort } from "../../Elements/About/feedback"
import { TeaserRestaurant } from "../../Elements/GetResturant/GetResturant"
import { Header } from "../../Partials/Header/Header"

import style from './Home.module.scss'

export const Home = () => {
    return (
        <>
            <Header />
            <section>
                <h2>Resturanter</h2>
                <TeaserRestaurant /></section>
            <section className={style.feedback}>
                <h2>Brugerne siger</h2>
                <FeedbackSort /></section>
        </>
    )
}