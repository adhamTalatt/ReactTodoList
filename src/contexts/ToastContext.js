import { createContext, useContext } from "react";
import { useState } from "react";
import SnackBar from "../comoponents/SnakBar";

export const ToastContext = createContext({});

export const TosatProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toastMassage, setToastMassage] = useState("");

  function handleToast(massage) {
    setOpen(true);
    setToastMassage(massage);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ToastContext.Provider value={{ handleToast }}>
      <SnackBar open={open} massage={toastMassage} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
