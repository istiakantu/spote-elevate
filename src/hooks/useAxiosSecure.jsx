import { useContext, useEffect } from "react"
import { AuthContext } from "../Providers/AuthProviders"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://sport-elevate-server.vercel.app'
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        })
    }, [logout, navigate, axiosSecure])

    return [axiosSecure];
};

export default useAxiosSecure;