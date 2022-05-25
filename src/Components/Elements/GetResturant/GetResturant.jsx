import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './GetResturant.module.scss'

export const TeaserRestaurant = () => {
    const [news, setNews] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/restaurants/?populate=*'
            const result = await axios.get(url)
            console.log(result.data.data);
            setNews(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setNews]);

    return (
        <>
            <section className={style.teaser}>
                {/* mapper vores array(api) */}
                {news && news.map((newsItem, i) => {
                    if (i < 3) {
                        return (
                            <figure key={newsItem.id}>
                                <img src={`http://localhost:1337${newsItem.attributes.Images.data[0].attributes.url}`} alt={newsItem.Name} />
                                <figcaption>
                                    <Link to={`/details/${newsItem.id}`}>
                                        <h3> {newsItem.attributes.Name}</h3>
                                    </Link>
                                    <p>{newsItem.attributes.category_restaurants.data[0].attributes.Style}</p>
                                    <h6> {newsItem.attributes.Type}</h6>
                                    <p> {newsItem.attributes.Description.substring(0, 180) + '...'}</p>

                                </figcaption>
                            </figure>
                        )
                    }
                    else {
                        return null
                    }
                })}
            </section>


        </>
    )

}