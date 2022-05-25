import axios from "axios";
import { useEffect, useState } from "react";
// import style from './GetResturant.module.scss'
// * istedet for at importer alle icons hver for sig importere vi det under samme navn
import * as Icons from "react-icons/fa"

export const SocialMedia = () => {
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

            {/* mapper vores array(api) */}
            {apiData && apiData.map((apiData, i) => {

                return (

                    <div key={apiData.id}>



                        <a href={apiData.attributes.Facebook} target="_blank" rel="noopener noreferrer"><Icons.FaFacebook /></a>
                        <a href={apiData.attributes.Instagram} target="_blank" rel="noopener noreferrer"><Icons.FaInstagram /></a>
                        <a href={apiData.attributes.contactEmail} target="_blank" rel="noopener noreferrer"><Icons.FaRegNewspaper /></a>

                    </div>
                )

            })}



        </>
    )

}