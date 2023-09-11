import Loader from 'components/Loader/Loader';
import { requestContacts } from 'components/redux/operations';
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

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <form></form>
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
