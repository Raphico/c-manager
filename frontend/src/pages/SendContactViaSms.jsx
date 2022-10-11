import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function SendContactViaSms()
{
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts } = useContext(GlobalContext);

  const contact = contacts.find(contact => contact.id === Number(id));

  const [formData, setFormData] = useState({
    name: '',
    to: ''
  })

  const { name, to } = formData;

  const sendSmsToApi = async() =>
  {
    await fetch(`/api/`, {
      method: 'POST',
      body: JSON.stringify({
        text: `${contact.name} - ${contact.number}\n description- ${contact.description}\n Sent by ${name}`,
        to
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const onChange = (e) =>
  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>
  {
    e.preventDefault();

    if (!name || !to)
    {
      toast.error('Fill in the field');
    }
    else
    {
      try
      {
        sendSmsToApi();
        setFormData({
          name: '',
          to: ''
        })
        navigate('/')
        toast.success(`Contact successfully sent to ${to}`);
      }
      catch(error)
      {
        toast.error('Couldn\'t send sms');
        console.log(error);
      }
    }
  }

  return (
    <Fade>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name='name' value={name} onChange={onChange} placeholder="Sent by i.e your name" />
        </div>
        <div className="form-group">
          <input type="text" name='to' value={to} onChange={onChange}  placeholder="To" />
        </div>
        <div className="form-group">
          <input className="btn" type="submit" value="Sms Contact" />
        </div>
      </form>
    </Fade>
  )

}
