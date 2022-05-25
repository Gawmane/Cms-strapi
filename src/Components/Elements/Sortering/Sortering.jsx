import axios from "axios";
import { useEffect, useState } from "react";
import style from "./sortering.module.scss"
// * istedet for at importer alle icons hver for sig importere vi det under samme navn
import * as Icons from "react-icons/fa"

export const SortRestaurant = () => {
    const [apiData, setApiData] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/category-restaurants/'
            const result = await axios.get(url)
            console.log(result.data.data);
            setApiData(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setApiData]);

    return (
        <>
            <div >
                {/* mapper vores array(api) */}
                {apiData && apiData.map((apiData, i) => {

                    return (
                        <button> {apiData.attributes.Style}</button>
                    )

                })}
            </div>


        </>
    )

}
