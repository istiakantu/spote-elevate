import { useQuery } from "@tanstack/react-query";
import { FaUserFriends, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handelMakeInstructor = user => {
        fetch(`https://sport-elevate-server.vercel.app/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handelMakeAdmin = user => {
        fetch(`https://sport-elevate-server.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'instructor' ? "Instructor " : <button onClick={()=>handelMakeInstructor(user)} className='btn btn-primary'><FaUserFriends></FaUserFriends></button>}</td>
                                <td>{user.role === 'admin' ? "Admin " : <button onClick={()=>handelMakeAdmin(user)} className='btn btn-primary'><FaUserTie></FaUserTie></button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;