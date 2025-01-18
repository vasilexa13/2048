import { Outlet, Navigate } from "react-router-dom";

//какой-то костыль но с ним работает 
const PrivateRoute = () => {
    const auth = false;
    return (
        auth ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
    );
}

export default PrivateRoute;