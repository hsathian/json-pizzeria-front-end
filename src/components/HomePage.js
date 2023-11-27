
import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageContainer, HomePageHeading, HomePageLinkContainer, LogoImage } from './styles/StyledComponent'; // Adjust the path if needed


const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageHeading>Json-Pizzeria</HomePageHeading>

      <HomePageLinkContainer>
        <Link to="/admin">Admin</Link>
        <Link to="/viewcustomers">Customers</Link>
        <Link to="/viewProducts">Products</Link>
      </HomePageLinkContainer>
    </HomePageContainer>
  );
};

export default HomePage;

