import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();
    if(loading || isInstructor){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructorLoading){
        return children
    }return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;