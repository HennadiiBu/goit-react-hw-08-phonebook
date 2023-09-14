import Loader from 'components/Loader/Loader';
import { addContact, requestContacts } from 'components/redux/operations';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'components/redux/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    dispatch(addContact(formData));
    event.currentTarget.reset();
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name: </p>
            <input type="text" required name="contactName" minLength={2} />
          </label>
          <label>
            <p>Number: </p>
            <input type="text" required name="contactNumber" minLength={6} />
          </label>
          <div>
            <button type="submit">Add contact</button>
          </div>
        </form>
        {error !== null && (
          <p>
            Oops something went wrong. Please, try again later. Error: {error}
          </p>
        )}
        {isLoading && <Loader />}
        <ul>
          {showContacts &&
            contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <h3>
                    Name: {contact.name}
                    <button>&times;</button>
                  </h3>
                  <p>Phone: {contact.number}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ContactsPage;
