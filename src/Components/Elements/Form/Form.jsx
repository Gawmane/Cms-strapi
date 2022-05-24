import { useForm } from "react-hook-form";
import { useState } from 'react'
import style from '../../Pages/Contact/Contact.module.scss'

export const Form = () => {

    //UseState hook - false
    const [formStatus, setFormStatus] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm();

    //Ved clik onsubmit - vis info i console og gør setformstatus true 
    const onSubmit = data => {
        console.log(data);
        setFormStatus(true)
    }

    return (
        <>

            {/* Conditional ternary operator - vis input - efter tryk submit vis message */}
            {!formStatus ?
                <section>
                    {/* // handleSubmit validere  inputs inden kald af "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                        {/* Validering NAVN - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input  {...register("fullname", { required: true })} placeholder="Dit navn" />
                        {errors.fullname && <span>Du skal indtaste dit navn</span>}

                        {/* Validering EMAIL - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <input type="email" {...register("email", { required: true })} placeholder="Din email" />
                        {errors.email && <span>Du skal indtaste din email</span>}

                        {/* Validering MESSAGE - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <textarea {...register("message", { required: true })} placeholder="Din besked"></textarea>
                        {errors.message && <span>Du skal indtaste din besked</span>}

                        <button type="submit" >Send</button>


                    </form>
                    {/* // handleSubmit validere  inputs inden kald af "onSubmit" */}
                    <h2>FeedBack</h2>
                    <p>Er du glad for vores side? vi vil elske at høre mere om det. Skriv en anmeldelse af siden herunder, så du måske en af de anmeldesler vi ligger op på siden!</p>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                        {/* Validering NAVN - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <input  {...register("fullname", { required: true })} placeholder="Dit navn" />
                        {errors.fullname && <span>Du skal indtaste dit navn</span>}

                        {/* Validering EMAIL - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <input type="email" {...register("email", { required: true })} placeholder="Din email" />
                        {errors.email && <span>Du skal indtaste din email</span>}

                        {/* Validering MESSAGE - tjekker om fullname er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <textarea {...register("message", { required: true })} placeholder="Din besked"></textarea>
                        {errors.message && <span>Du skal indtaste din besked</span>}

                        <button type="submit" >Send</button>


                    </form>
                </section>
                :
                // Ny form med besked om at formen er sendt
                <form className={style.formMessage}>
                    <article>
                        <h2>Tak for din besked</h2>
                        <p>Din besked er nu sendt og vi vil kigge nærmere på den i løbet af nogle dage.</p>
                        <p>Du kan nu forlade siden unden problemer</p>
                    </article>
                </form>
            }
        </>

    )
}
