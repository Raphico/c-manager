let id = 0

export default function AppReducer(state, action)
{
  switch(action.type)
  {
    case 'contactAdded':
      return {
        ...state,
        contacts: [...state.contacts, {
          id: id++,
          ...action.payload
        }]
      }

    case 'contactDeleted':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }

    case 'contactUpdated':
      const updatedContact = action.payload.updatedContact;
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id !== Number.parseInt(action.payload.id) ? contact : {
          ...contact,
          name: updatedContact.name ? updatedContact.name : contact.name,
          number: updatedContact.number ? updatedContact.number : contact.number,
          description: updatedContact.description ? updatedContact.description : contact.description,
        })
      }

    default:
      return state;
  }
}
