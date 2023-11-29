// StyledComponents.js
import styled from 'styled-components';

export const HomePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const AdminPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const HomePageHeading = styled.h1`
color: #e74c3c; /* Red color */
font-size: 4em;
font-style: italic;
text-align: center;
margin-top: 10px;
`;

export const AdminPageHeading = styled.h1`
color: grey
font-size: 4em;
font-style: italic;
text-align: left;
margin-top: 10px;
`;

export const HomePageLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px auto;
  background-color: #8B4513;
  max-width: 100%
  width: 200%;
  
  a {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #b8860b; 
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-style: italic;
  }
`;

export const AdminPageLinkContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 30px auto;
  background-color: grey;
  max-width: 100%
  width: 200%;
  
  a {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #001f3f; 
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-style: italic;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

