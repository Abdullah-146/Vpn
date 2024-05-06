import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import Plans from "./Pages/Plans";
import CommingSoon from "./Pages/CommingSoon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";

import { useEffect } from "react";
import { getAllFaqs } from "./Redux/slice/faq/faqAction";

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <Wrapper />
    </Provider>
  );
}

function Wrapper() {
  const dispatch = useDispatch();
  const {
    loading: authLoading,
    error: authError,
    userInfo,
    remainingTime,
    referralCode,
  } = useSelector((state) => state.user);
  const {
    loading: faqLoading,
    error: faqError,
    faqs,
  } = useSelector((state) => state.faq);

  useEffect(() => {
    if (userInfo._id) {
      if (!faqLoading && faqs.length == 0) {
        console.log("fetching faqs");
        dispatch(getAllFaqs());
      }
    }
  }, [userInfo._id]);

  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<CommingSoon />}></Route> */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Plans" element={<Plans />}></Route>
          <Route path="/ThankYou" element={<CommingSoon />}></Route>

          {/* Invalid url */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
