import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Fade from 'react-reveal/Fade'

export default function UpdateContact()
{
  const navigate = useNavigate();
  const { updateContact } = useContext(GlobalContext);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    description: ''
  });

  const { name, number, description } = formData;

  const onChange = (e) =>
  {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>
  {
    e.preventDefault();

    if (!name && !number && !description)
    {
      toast.error('Pls pass in a name, and a number')
    }
    else
    {
      updateContact(id, formData)
      navigate('/');
      toast.success('Contact successfully updated')
    }
  }

  return (
    <Fade>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name='name' value={name} onChange={onChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="text" name='number' value={number} onChange={onChange} className="form-control" placeholder="Number" />
        </div>
        <div className="form-group">
          <input type="text" name='description' value={description} onChange={onChange} className="form-control" placeholder="Description" />
        </div>
        <div className="form-group">
          <input className="btn" type="submit" value="Add Contact" />
        </div>
      </form>
    </Fade>
  )
}
