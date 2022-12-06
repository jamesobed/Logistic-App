import { ToastContainer } from 'react-toastify';

const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={true}
      limit={2}
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
