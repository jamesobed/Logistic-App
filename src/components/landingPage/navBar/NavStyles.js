import styled from 'styled-components';
export const NavStyles = styled.nav`
  position: absolute;
  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  background: #ffffff;

  & .logo {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 155px;
    height: 48px;
    left: 150px;
    top: 24px;
  }
  & .login {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;

    position: absolute;
    width: 42px;
    height: 19px;
    left: 1249px;
    top: 38.5px;
    text-decoration: none;
  }
  & .Link {
    text-decoration: none;

    width: 42px;
    height: 19px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #012a4a;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
  }
`;

export const NavMenuStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  position: absolute;
  width: 50%;
  height: 19px;
  left: 539px;
  top: 38.5px;

  & a {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    text-decoration: none;
  }

  & li {
    list-style: none;
  }
`;
