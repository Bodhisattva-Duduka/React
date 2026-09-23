import AccountDetails from "./AccountDetails"
import OrderDetails from "./OrderDetails"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Account() {
  return (
    <div>
        <div>
            <Link to="/account/edit">Edit</Link>
            <Link to="/account/orders">Your Orders</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Account