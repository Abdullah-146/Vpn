import { toast } from "react-toastify";

export const errorHandler = (error, dontShow = false) => {
  console.log("error", error.response.data);
  let status = error.response?.status;
  let err = null;
  if (status == 400) {
    let key = "Error";
    let value = error.response.data.message[0];
    err = `${key}: ${value}`;
  } else {
    if (error.response.data.message) {
      err = error.response.data.message;
    } else {
      err = error.response.data.message;
    }
  }
  if (!dontShow) {
    toast.warn(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return err;
};
