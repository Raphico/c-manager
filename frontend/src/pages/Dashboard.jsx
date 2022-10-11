import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import ContactContainer from "../components/ContactContainer"
import Fade from 'react-reveal/Fade'

export default function Dashboard()
{
  const { contacts } = useContext(GlobalContext);

  return (
    <Fade>
      {contacts.length !== 0 ? <ContactContainer contactList={contacts} /> : <h2 className="text-center">No contacts to display</h2>}
    </Fade>
  )
}