// import { Navbar, Footer } from "./components";
import Business from "./Pages/Business";
import LandingPage from "./Pages/LandingPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Faqs from "./Pages/Faqs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Contactus from "./Pages/Contactus";

const App = () => {
  // console.log("auth user is here : ", user);

  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={user ? <LandingPage /> : <Navigate to="/signup" />}
        /> */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        /> */}
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="/business"
          element={user ? <Business /> : <Navigate to="/signup" />}
        /> */}
        <Route path="/business" element={<Business />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
