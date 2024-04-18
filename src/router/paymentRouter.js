import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>
const TotalOrder = lazy(()=>import("../pages/payments/TotalOrderpage"))

const PaymentRouter = () => {

  return [
    {
      path: "list",
      element: <Suspense fallback={Loading}><TotalOrder/></Suspense>
    },
    {
      path: "",
      element: <Navigate replace to="/totalOrders"/>
    }

  ]
}

export default PaymentRouter;
