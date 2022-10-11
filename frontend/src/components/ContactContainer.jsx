import ContactItem from './ContactItem';

export default function ContactContainer({ contactList })
{
  return (
    <div className="contact-list">
      {contactList.map(contact => <ContactItem key={contact.id} contact={contact} />)}
    </div>
  )
}
