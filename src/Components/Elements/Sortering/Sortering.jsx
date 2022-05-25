import axios from "axios";
import { useEffect, useState } from "react";



export const SortRestaurant = () => {
    const [apiData, setApiData] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/restaurants/?populate=*'
            const result = await axios.get(url)
            console.log(result.data.data);
            setApiData(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setApiData]);

    return (
        <>
            <section >
                {/* mapper vores array(api) */}
                {apiData && apiData.map((apiData, i) => {

                    return (
                        <figure key={apiData.id}>
                            <img src={`http://localhost:1337${apiData.attributes.Images.data[0].attributes.url}`} alt={apiData.Name} className={style.images} />
                            <figcaption>

                                <h3>{apiData.attributes.Name}</h3>

                                <h6>{apiData.attributes.Type}</h6>
                                <p>{apiData.attributes.Description}</p>
                                <p><b>Åbningstider:</b> {apiData.attributes.OpeningHours}</p>
                                <p><b>Adresse:</b> {apiData.attributes.Adress}</p>
                                <p><b>Postnummer:</b> {apiData.attributes.Postnummer} {apiData.attributes.By}</p>

                                <p><b>Email:</b> {apiData.attributes.Email}</p>
                                <p><b>Telefon:</b> {apiData.attributes.Telefonnummer}</p>

                                <button><b>Se mere:</b> {apiData.attributes.Link}</button>


                            </figcaption>
                        </figure>
                    )

                })}
            </section>


        </>
    )

}