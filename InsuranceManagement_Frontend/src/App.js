import { Routes, Route } from "react-router-dom";
import Policies from "./components/Policies/Policies";
import PolicyDetails from "./components/policyDetails/PolicyDetails";
import Login from "./components/Login/Login";
import MyPolicies from "./components/MyPolicies/MyPolicies";
import LoginProvider from "./context/LoginContext";
import UserInformationProvider from "./context/UserInformationContext";
import RegisterPage from "./Pages/RegisterPage";
import ClaimForm from "./components/ClaimForm/ClaimForm";
import AppLayout from "./Pages/AppLayout";
import UserHomePage from "./Pages/UserHomePage/UserHomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div>
    <LoginProvider>
      <UserInformationProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path = "/register" element={<RegisterPage /> }/>
            <Route path="/logout" element={<AppLayout />} />

            <Route path="*" element={<AppLayout />} />
            {/* <Route path="/policies" element={<Policies />} />
            <Route path="/policy" element={<PolicyDetails />} />
            <Route path="/my-policies" element={<MyPolicies />} />
            <Route path="/claim" element={<ClaimForm />} /> */}
            {/* <Route path = "*" element={<AppLayout/>}/> */}
          </Routes>
      </UserInformationProvider>
    </LoginProvider>
   
    </div>
  );
}

export default App;
