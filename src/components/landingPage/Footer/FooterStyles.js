import styled from 'styled-components';

export const FooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 16px;
  gap: 12px;
  isolation: isolate;

  position: absolute;
  width: 100%;
  height: 50px;
  left: -1px;
  top: 3362px;

  background: #303030;

  & a,
  p {
    text-decoration: none;
    color: #fff;
  }
  /* 100 = 1441 */
  & .footerLogo {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 155px;
    height: 48px;
    left: 150px;
    top: 20px;
  }
`;

export const FooterTopStyles = styled.div`
  width: 88%;
  height: 37px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 1;

  & .social {
    position: absolute;
    width: 337px;
    height: 24px;
    left: 1103.5px;
    top: 26px;
  }

  & .menu {
    position: absolute;
    width: 420.5px;
    height: 26px;
    left: 550.5px;
    top: 30px;
  }

  & .menu a {
    padding-right: 20px;
  }
  & .social a {
    padding-right: 14px;
  }
`;
export const FooterBottomStyles = styled.div`
  width: 79%;
  height: 23px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 0;
  display: flex;

  & .privacy {
    width: 50%;
    height: 22px;
    left: 406px;
    padding-left: 200px;
    bottom: 90px;
  }
  & .privacy a {
    padding-right: 14px;
  }
`;
