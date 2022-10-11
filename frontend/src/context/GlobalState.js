import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  contacts: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) =>
{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addContact = (contact) =>
  {
    dispatch({
      type: 'contactAdded',
      payload: contact
    })
  }
  const deleteContact = (id) =>
  {
    dispatch({
      type: 'contactDeleted',
      payload: id
    })
  }
  const updateContact = (id, updatedContact) =>
  {
    dispatch({
      type: 'contactUpdated',
      payload: {
        id,
        updatedContact
      }
    })
  }

  return (
    <GlobalContext.Provider value={{
    contacts: state.contacts,
    addContact,
    deleteContact,
    updateContact
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
