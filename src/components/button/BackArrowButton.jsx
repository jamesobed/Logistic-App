/* eslint-disable react/prop-types */
import './backArrowButton.scss';

const BackArrowButton = (props) => {
  const { handleClick } = props;
  return (
    <button className="backArrowButton" onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black" />
      </svg>
      Back
    </button>
  );
};

export default BackArrowButton;
