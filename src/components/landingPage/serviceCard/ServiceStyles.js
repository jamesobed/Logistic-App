import styled from 'styled-components';

export const ServiceStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 80px;

  position: absolute;
  width: 80%;
  height: 995.84px;
  left: 149.24px;
  top: 695px;

  & .serviceTop {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 701px;
    height: 116px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .serviceTop .title {
    width: 381px;
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
  & .serviceTop .serviceText {
    width: 701px;
    height: 44px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #21334f;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const ServiceGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 1140.17px;
  height: 799.84px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  & .serviceCard {
    width: 378.06px;
    height: 383.92px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & .serviceCard img {
    position: relative;
    width: 62.28px;
    height: 71.07px;
    left: 157.52px;
    top: 65.94px;
  }
  & .serviceCard .serviceTitle {
    position: relative;
    width: 172px;
    height: 27px;
    left: 102.76px;
    top: 70px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    color: #303030;
  }
  & .serviceCard .serviceText {
    position: relative;
    width: 327px;
    height: 106px;
    left: 25.76px;
    top: 100px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    text-align: center;

    color: #303030;
  }
`;
