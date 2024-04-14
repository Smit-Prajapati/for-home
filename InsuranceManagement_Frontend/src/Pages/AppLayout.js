import React, { useContext } from 'react'

import UserHomePage from './UserHomePage/UserHomePage';
import { UserInformationContext } from '../context/UserInformationContext';
import getCurrentUserId from '../utils/getCurrentUserId';
import { useUserInfo } from '../utils/useUserInfo';
import LandingPage from './LandingPage/LandingPage';

const AppLayout = () => {
    const token = localStorage.getItem("login");
    const userId = getCurrentUserId();
    const information = useUserInfo(userId);

  return (
    <div>
        {!token && <LandingPage/>}
        {(token  && information.information.roleName === "Claimant") && <UserHomePage/>}
        {(token  && information.information.roleName === "Insurer") && <h1>Admin</h1>}
    </div>
  )
}

export default AppLayout;