import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button, buttonClasses } from '@mui/base/Button';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 800;
  font-size: 0.875rem;
  line-height: 1.5;
  &.active {
    color: #0072e5;
  }
`;

export const NavigationBar = styled('nav')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px solid;
  padding: 20px;
  background-color: azure;
  width: '100vw';
`;

export const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
};

export const CustomButton = styled(Button)(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${grey[100]};
  text-align: center;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `
);
