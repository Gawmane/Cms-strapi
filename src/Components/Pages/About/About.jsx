import { AboutInfo } from "../../Elements/About/aboutInfo"
import { FeedbackInfo } from "../../Elements/About/feedback"

import { Navigation } from "../../Partials/Nav/Navigation"
import style from "./About.module.scss"
export const About = () =>{
    return(
        <>
         <Navigation/>
        <h2>Om os</h2>
        <AboutInfo/>
        <FeedbackInfo/>
       
       
      </>
    )
}