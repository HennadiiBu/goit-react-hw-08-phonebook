import { Button } from '@mui/material';
import { deleteContact, requestContacts } from 'components/redux/operations';
import {
  selectContacts,
  selectContactsFilter,
} from 'components/redux/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {showContacts &&
        visibleContacts.map(contact => {
          return (
            <li
              key={contact.id}
              style={{
                border: '1px solid #1976d2',
                borderRadius: '10px',
                minWidth: '200px',
                listStyle: 'none',
                padding: '10px',
                position: 'relative',
              }}
            >
              <h3>
                Name: {contact.name}
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(deleteContact(contact.id));
                  }}
                  style={{
                    position: 'absolute',
                    top: '7%',
                    right: '3%',
                    padding: '0',
                    minWidth: '25px',
                  }}
                >
                  &times;
                </Button>
              </h3>
              <a
                href="tel:+380961111111"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Phone: {contact.number}
              </a>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactsList;
