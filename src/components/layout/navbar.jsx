import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;
  span {
    color: var(--primary-hover-color) !important;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        cursor: pointer;
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.75rem 0.5rem;
        margin: 0 0.25rem;
        border-radius: 5px;
        &:hover {
          background: var(--primary-color);
        }
      }
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    ul {
      margin-top: 0.5rem;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <h1>
          <span>React Junior</span> Test Task
        </h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
