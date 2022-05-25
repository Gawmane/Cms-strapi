import React from 'react';
import style from '../GetResturant/GetResturant.module.scss'
import { Link } from "react-router-dom";
const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>post</h2>;
    }

    return (
        <ul >
            {posts.map(apiData => (
                <li key={apiData.id} >
                    <figure key={apiData.id}>
                        <img src={`http://localhost:1337${apiData.attributes.Images.data[0].attributes.url}`} alt={apiData.Name} className={style.images} />
                        <figcaption>
                            <Link to={`/details/${apiData.id}`}>
                                <h3>{apiData.attributes.Name}</h3>
                            </Link>
                            <h6>{apiData.attributes.Type}</h6>
                            <p>{apiData.attributes.category_restaurants.data[0].attributes.Style}</p>
                            <p>{apiData.attributes.Description}</p>
                            <p><b>Åbningstider:</b> {apiData.attributes.OpeningHours}</p>
                            <p><b>Adresse:</b> {apiData.attributes.Adress}</p>
                            <p><b>Postnummer:</b> {apiData.attributes.Postnummer} {apiData.attributes.By}</p>

                            <p><b>Email:</b> {apiData.attributes.Email}</p>
                            <p><b>Telefon:</b> {apiData.attributes.Telefonnummer}</p>

                            <button><b>Se mere:</b> {apiData.attributes.Link}</button>


                        </figcaption>
                    </figure>

                </li>
            ))}
        </ul>
    );
};

export default Posts;