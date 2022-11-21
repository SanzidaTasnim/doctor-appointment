import React , {useContext} from 'react';
import { createUser } from '../../App';
import {Navigate , Outlet} from 'react-router-dom';
import {useLocation} from 'react-router';

const PrivateRoute = ({children}) => {
   const [loggedInUser] = useContext(createUser);
   const location = useLocation();

   return loggedInUser.email ? <Outlet /> : <Navigate to='/login' state={{from : location}}/>
};

export default PrivateRoute;