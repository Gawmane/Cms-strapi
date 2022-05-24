import { link, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
// import style from './GetResturant.module.scss'

export const OneRestaurant = () =>{
    const [apiData, setApiData] = useState([]);
    const {id} = useParams();
 
    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:1337/api/restaurants/${id}?populate=*`
            const result = await axios.get(url)
            console.log(result.data.data);
           setApiData(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setApiData]);
   
   
return(
    <>
    <section>
<h1>hej </h1>

         {apiData ? 

            <figure>

     {apiData.attributes.Images.data && apiData.attributes.Images.data.map((item, index) => {
console.log(item)
       return(
    < img key={index} src={`http://localhost:1337${item.attributes.url}`} alt={apiData.attributes.Name}></img>
       )
   })}  
         
                <figcaption>
                     <h3> {apiData.attributes.Name}</h3> 
                    <h6> {apiData.attributes.Type}</h6> 
                    <p> {apiData.attributes.Description}</p>  
                    <h6> {apiData.attributes.OpeningHours}</h6> 
                    <h4>Find os her</h4>
                    <p>{apiData.attributes.Adress}</p>
                    <p>{apiData.attributes.Postnummer}</p>
                    <p>{apiData.attributes.By}</p>

                    <h4>Kontakt os på</h4>
                    <p>{apiData.attributes.Email}</p>
                    <p>{apiData.attributes.Telefonnummer}</p>

                    <button> {apiData.attributes.Link}</button> 
                    
            </figcaption>
        </figure>

       :null}
        </section>
        
    
    </>
)

}