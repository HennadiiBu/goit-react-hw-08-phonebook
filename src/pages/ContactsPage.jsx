import Loader from 'components/Loader/Loader';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'components/redux/selectors';
import { Container } from 'components/styledComponents/components';
import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <>
      <Container>
        <ContactForm />
        {error !== null && (
          <p>
            Oops something went wrong. Please, try again later. Error: {error}
          </p>
        )}
        {isLoading && <Loader />}
        <ContactsList />
      </Container>
    </>
  );
};

export default ContactsPage;
