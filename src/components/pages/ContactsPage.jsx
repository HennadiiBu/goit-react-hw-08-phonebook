import Loader from 'components/Loader/Loader';
import {
  addContact,
  deleteContact,
  requestContacts,
} from 'components/redux/operations';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'components/redux/selectors';
import {
  Container,
  CustomButton,
} from 'components/styledComponents/components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import { FocusTrap } from '@mui/base/FocusTrap';

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

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <TextField
                type="text"
                required
                name="contactName"
                minLength={2}
                label="Name:"
              />
            </label>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <TextField
                type="text"
                required
                name="contactNumber"
                minLength={6}
                label="Number:"
              />
            </label>
          </div>
          <div
            style={{
              marginTop: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button type="submit" variant="contained">
              Add contact
            </Button>
            <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
              <Stack
                alignItems="center"
                spacing={2}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <CustomButton
                  type="button"
                  onClick={() => setOpen(!open)}
                  variant="contained"
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  &#8758;
                </CustomButton>
                {open && (
                  <label
                    style={{
                      display: 'flex',

                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      marginTop: '0',
                    }}
                  >
                    <TextField
                      type="text"
                      required
                      name="contactName"
                      minLength={2}
                      label="Find Contact:"
                    />
                  </label>
                )}
              </Stack>
            </FocusTrap>
          </div>
        </form>

        {error !== null && (
          <p>
            Oops something went wrong. Please, try again later. Error: {error}
          </p>
        )}
        {isLoading && <Loader />}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {showContacts &&
            contacts.map(contact => {
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
      </Container>
    </>
  );
};

export default ContactsPage;
