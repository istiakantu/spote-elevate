import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo/logo.png';
import { FaUserEdit, FaIoxhost, FaAtlas, FaFileImport, FaSellsy, FaPenSquare, FaBookmark, FaBitcoin, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";



const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-slate-600 text-2xl">

                    <li className="mb-24"><Link to='/'><img className="w-48" src={logo} alt="" /></Link></li>

                    {
                        isAdmin && <>

                            <li><Link to='/dashboard/allUsers'> <FaUserEdit></FaUserEdit> Manage Users</Link></li>
                            <li className="my-5"><Link> <FaIoxhost></FaIoxhost> Manage Classes</Link></li>
                        </>
                    }
                    {
                        isInstructor && <>

                            <li><Link> <FaAtlas></FaAtlas> My Classes</Link></li>
                            <li className="my-5"><Link> <FaFileImport></FaFileImport>Add a Classes</Link></li>
                            <li><Link><FaSellsy></FaSellsy> Enrolled Students</Link></li>
                            <li className="my-5"><Link><FaPenSquare></FaPenSquare> Feedback</Link></li>
                        </>
                    }
                    {
                        !isAdmin && !isInstructor &&  <>

                            <li><Link to='/dashboard/selectedClass'><FaBookmark></FaBookmark> My Selected Classes</Link></li>
                            <li className="my-5"><Link><FaBitcoin></FaBitcoin> My Enrolled Classes</Link></li>
                            <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;