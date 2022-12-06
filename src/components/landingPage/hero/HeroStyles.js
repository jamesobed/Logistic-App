import styled from 'styled-components';
export const HeroStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 519px;
  left: 0px;
  top: 96px;
  border: 2px solid red;

  & .heroImgage {
    position: absolute;
    width: 100%;
    height: 519px;
    left: 0px;
    top: 0px;

    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroMessageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;

  position: absolute;
  width: 50%;
  height: 277px;
  left: 350px;
  top: 91px;

  & .textMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 741px;
    height: 197px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 50px;
  }

  & .textMessage .bold {
    width: 741px;
    height: 144px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 66px;
    line-height: 108.4%;
    /* or 72px */

    text-align: center;

    color: #ffffff;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: -40px;
  }
  & .textMessage .tiny {
    width: 311px;
    height: 29px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  & .heroTextButton {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 437px;
    height: 48px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  & .heroTextButton .customer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 16px;

    width: 228px;
    height: 48px;

    background: #e02b45;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
  }
  & .heroTextButton .rider {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 16px;

    width: 193px;
    height: 48px;

    border: 1px solid #ffffff;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
  }
`;
