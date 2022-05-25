import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import style from './GetResturant.module.scss'

export const AboutInfo = () => {
    const [apiData, setApiData] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/abouts/?populate=*'
            const result = await axios.get(url)
            console.log(result.data.data);
            setApiData(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setApiData]);

    return (
        <>
            <section>
                {/* mapper vores array(api) */}
                {apiData && apiData.map((apiData, i) => {

                    return (
                        <figure key={apiData.id}>

                            <figcaption>

                                <h3>{apiData.attributes.Name}</h3>
                                <p>{apiData.attributes.About}</p>
                            </figcaption>

                            <video autoPlay={true} src={`http://localhost:1337${apiData.attributes.Images.data[0].attributes.url}`} alt={apiData.Name} width="750" height="500" />
                        </figure>
                    )

                })}
            </section>


        </>
    )

}