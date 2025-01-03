import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/addFood/AddFood";
import AllFoods from "../pages/allFoods/AllFoods";
import SingleFood from "../pages/singleFoods/SingleFood";
import FoodPurchase from "../pages/singleFoods/FoodPurchase";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>
      },
      {
        path: "/foods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch('http://localhost:5000/foods'),
      },
      {
        path: "/foods/details/:id",
        element: <SingleFood></SingleFood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/details/${params.id}`),
      },
      {
        path: "/foods/details/purchase/:id",
        element: <FoodPurchase></FoodPurchase>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/details/purchase/${params.id}`),
      },
      
//http://localhost:5000/foods/details/purchase/67746a62f9cd0f3b095a8d36
    ]
  },
  
]);
export default router;
