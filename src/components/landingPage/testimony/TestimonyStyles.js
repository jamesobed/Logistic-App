import styled from 'styled-components';

export const TestimonyStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 80px;
  overflow-x: scroll;

  position: absolute;
  width: 96%;
  height: 890px;
  left: 118px;
  top: 2382px;

  & h2 {
    width: 615px;
    height: 48px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #e02b45;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const TestimonyCardStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  width: 94%;
  height: 762px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  & .testimonyCard {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 24px;
    gap: 40px;

    width: 387.25px;
    height: 361px;

    background: #ffffff;
    border: 1px solid #d9d9d9;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .testimonyCard .img1 {
    width: 60px;
    height: 60px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .testimonyCard .clientest2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    width: 339.25px;
    height: 181px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  & .testimonyCard .clientest2 .testimonyText {
    width: 339px;
    height: 130px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    color: #303030;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .testimonyCard .clientest2 .clientPosition .clientName {
    /* position: absolute; */
    width: 136px;
    /* height: 27px; */
    left: 0px;
    top: 0px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    /* line-height: 150%; */
    /* identical to box height, or 27px */

    color: #303030;
  }

  & .testimonyCard .clientest2 .clientPosition {
    width: 339.25px;
    height: 27px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    display: flex;
    justify-content: space-between;
  }
`;
