import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: green;
  }
`;

export const NavigationBar = styled('nav')`
  display: flex;
  justify-content: center;
  gap: 30px;
  border: 1px solid;
  padding: 20px;
  background-color: azure;
`;
