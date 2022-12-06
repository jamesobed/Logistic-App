import styled from 'styled-components';
import bg_img from '../../assets/riderpic.svg';
import emailIcon from '../../assets/email_icon.svg';
import passKey from '../../assets/pass_icon.svg';

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SideImage = styled.div`
  width: 65%;
  height: 100vh;
  background-image: url(${bg_img});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const OtherSide = styled.div`
  width: 35%;
  margin: 7rem;

  display: flex;
  flex-direction: column;

  & .passIcon {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.6rem 1rem 0.5rem;
    gap: 1rem;

    /* background-position: 10% 90%; */

    width: 90%;
    height: 3rem;

    opacity: 0.8;
    border: 1px solid #012a4a;
    border-radius: 6px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    & .faIcon {
      margin-top: 200px;
      /* position: absolute; */
    }

    ::placeholder {
      padding-left: 25px;
      background-image: url(${passKey});
      background-repeat: no-repeat;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 8.25rem;
  height: 2.75rem;
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  width: 246px;
  height: 24px;
  @media only screen and (max-width: 600px) {
    width: 140px;
  }

  color: #012a4a;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 2rem;
`;

export const LabelField = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  /* identical to box height, or 150% */

  color: #012a4a;
`;

export const InputField = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.6rem 1rem 0.5rem;
  gap: 1rem;

  /* background-position: 10% 90%; */

  width: 90%;
  height: 3rem;

  opacity: 0.8;
  border: 1px solid #012a4a;
  border-radius: 6px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  & .faIcon {
    margin-top: 200px;
    /* position: absolute; */
  }

  ::placeholder {
    padding-left: 25px;
    background-image: url(${emailIcon});
    background-repeat: no-repeat;
  }
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  margin-top: 1rem;

  width: 90%;

  background: #e02b45;
  border-radius: 6px;
  border: #e02b45;

  .btnText {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;

    color: #ffffff;
  }
`;

export const LastLine = styled.div`
  width: 100%;
  margin-top: 5%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #012a4a;
`;

export const RedText = styled.span`
  color: #e02b45;
  font-weight: bold;

  & .Link {
    text-decoration: none;
    color: #e02b45;
    cursor: pointer;
  }
`;

export const LeftText = styled.div`
  width: 50%;
  margin-top: 50rem;
  margin-left: 3.1rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  color: #ffffff;
`;
