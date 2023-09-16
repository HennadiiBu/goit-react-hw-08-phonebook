import { Button, Stack, TextField } from '@mui/material';
import FocusTrap from '@mui/material/Unstable_TrapFocus';
import { findContact } from 'components/redux/contactsReducer';
import { addContact } from 'components/redux/operations';
import { selectContactsFilter } from 'components/redux/selectors';
import { CustomButton } from 'components/styledComponents/components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function ContactForm() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const [open, setOpen] = useState(false);
  const handleChange = event => {
    dispatch(findContact(event.target.value.toLowerCase().trim()));
  };
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
                  onChange={handleChange}
                  value={filter}
                />
              </label>
            )}
          </Stack>
        </FocusTrap>
      </div>
    </form>
  );
}

export default ContactForm;
