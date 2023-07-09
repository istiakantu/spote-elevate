import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const ClassCard = ({ item }) => {
    const { _id, image, className, instructorName, availableSeats, price } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    

    const handelAddClass = item => {
        if (user && user.email) {
            const selectedClass = { classId: _id, className, image, instructorName, availableSeats, price, email: user.email }
            fetch('https://sport-elevate-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${item.className} Class Selected`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            })
        }
    }
    return (
        <div className={`card w-96 text-gray-200 ${availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{className}</h2>
                <div>
                    <p className="text-xl">Instructor: {instructorName}</p>
                </div>
                <div className="flex gap-16">
                    <p>Available Seat: {availableSeats}</p>
                    <p>Price: <span className="text-orange-500">${price}</span></p>
                </div>
                <div className="card-actions">
                    <button disabled={isAdmin || isInstructor || availableSeats === 0 } onClick={() => handelAddClass(item)}  className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;