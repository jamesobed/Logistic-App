import styled from 'styled-components';

export const CaroselStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px 40px 60px 140px;
  gap: 60px;

  position: absolute;
  width: 99%;
  height: 491px;
  left: 1px;
  top: 1771px;

  background: rgba(0, 0, 0, 0.04);

  & img {
    width: 594px;
    height: 371px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .caroselText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

    width: 499px;
    height: 232px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  & .caroselText .caroselText1 {
    width: 499px;
    height: 96px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: capitalize;

    color: #e02b45;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .caroselText .caroselText2 {
    width: 473px;
    height: 104px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    color: #21334f;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
