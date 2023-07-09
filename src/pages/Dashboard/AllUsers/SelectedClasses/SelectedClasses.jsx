import useCart from "../../../../hooks/useCart";
import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';


const SelectedClasses = () => {
    const [cart] = useCart()

    return (
        <div>
            <h1>selected class {cart.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td>{index + 1}</td>
                                <td>{row.className}</td>
                                <td>{row.instructorName}</td>
                                <td className="text-orange-500">${row.price}</td>
                                <td><button className="btn btn-outline btn-info btn-sm"><FaAmazonPay> </FaAmazonPay></button></td>
                                <td><td><button className="btn btn-outline btn-error btn-sm"><FaTrashAlt></FaTrashAlt></button></td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;