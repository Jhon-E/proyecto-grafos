import { useEffect } from "react";
import { useContext } from "react";
import { AlertContext } from "../context/AlertProvider";


const Alert = ({ message }) => {

  const { setShowAlert, showAlert } = useContext(AlertContext);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return showAlert ? (
    <div role="alert" className="alert alert-info fixed bottom-5 right-5 w-max">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>{message}</span>
      <div
        onClick={() => setShowAlert(false)}
        className=" cursor-pointer font-bold bg-blue-500 rounded-lg p-1"
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
        >
          <path
            fill="none"
            stroke="#000000"
            strokeWidth="15"
            strokeLinecap="round"
            d="M20,20 L80,80 M80,20 L20,80"
          />
        </svg>
      </div>
    </div>
  ) : null;
};

export default Alert;
