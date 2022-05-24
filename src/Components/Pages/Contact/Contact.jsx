import { ContactForm, Form } from "../../Elements/Form/Form"
import { Navigation } from "../../Partials/Nav/Navigation"
import style from "./Contact.module.scss"
export const Contact = () => {
  return (
    <>
      <Navigation />
      <h2>Kontakt os her</h2>
      <Form />
    </>
  )
}