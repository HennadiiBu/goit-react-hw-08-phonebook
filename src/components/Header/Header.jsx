import { Button } from '@mui/material'
import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'components/config/routes'
import { logoutUser } from 'components/redux/operations';
import { selectUserAuthention, selectUserData } from 'components/redux/selectors';
import { NavigationBar, StyledLink } from 'components/styledComponents/components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export function Header() {
    const dispatch = useDispatch();
    const authenticated = useSelector(selectUserAuthention);
    const userData = useSelector(selectUserData);

    const handleLogOut = () => {
        dispatch(logoutUser());
      };
  return (
    <header>
    <NavigationBar>
      <StyledLink to={HOME_ROUTE}>Home</StyledLink>

      {authenticated ? (
        <>
          <StyledLink to={CONTACTS_ROUTE}>Contacts</StyledLink>
          <span>{userData.email}</span>
          <Button onClick={handleLogOut} variant="contained">
            Logout
          </Button>
        </>
      ) : (
        <>
          {' '}
          <StyledLink to={LOGIN_ROUTE}>Login</StyledLink>
          <StyledLink to={REGISTER_ROUTE}>Register</StyledLink>
        </>
      )}
    </NavigationBar>
  </header>
  )
}

export default Header