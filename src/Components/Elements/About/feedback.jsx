import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import style from './GetResturant.module.scss'

export const FeedbackInfo = () =>{
    const [apiData, setApiData] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1337/api/feedbacks/?populate=*'
            const result = await axios.get(url)
            console.log(result.data.data);
           setApiData(result.data.data);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setApiData]);
   
return(
    <>
   
        {/* mapper vores array(api) */}
        {apiData && apiData.map((apiData, i) => {
            
            return(
             <article>
                     
                    <q>{apiData.attributes.Reviws}</q>
                    <h6>-{apiData.attributes.Author}</h6>
          
          </article>  
        )
       
        })}
        
        
    
    </>
)

}