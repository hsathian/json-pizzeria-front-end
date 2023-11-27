import React from 'react';
import { Link } from 'react-router-dom';
import { AdminPageContainer, AdminPageHeading, AdminPageLinkContainer, LogoImage } from './styles/StyledComponent'; // Adjust the path if needed


const Admin = () => {
  return (
    <AdminPageContainer>
      <AdminPageHeading>Admin Page</AdminPageHeading>

      <AdminPageLinkContainer>
      <Link to="/">Home</Link> 
        <Link to="/viewemployees">View Employees</Link>
        <Link to="/vieworderdetails">View Order Details</Link> 
      </AdminPageLinkContainer>
    </AdminPageContainer>
  );
};

export default Admin;