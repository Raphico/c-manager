import { useContext, useState } from 'react';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { MdSms } from 'react-icons/md';

export default function ContactContainer({ contact })
{
  const { deleteContact } = useContext(GlobalContext);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={`contact ${showDescription ? 'extend' : ''}`} onClick={() => setShowDescription(!showDescription)}>
      <div className="flex">
        <div className="info">
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        <Link to={`/send-contact-via-sms/${contact.id}`} className='sms'>
          <MdSms size={18} className='' />
        </Link>
        <div>
          <Link to={`/update-contact/${contact.id}`}>
            <FaPenAlt color='black' size={18} className="crud" />
          </Link>
          <FaTrashAlt onClick={() => deleteContact(contact.id)} size={18} color='red' className="crud" />
        </div>
      </div>
      <p>{contact.description}</p>
    </div>
  )
}
