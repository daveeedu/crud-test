import config from "../utils/config";
import HomePage from "./home/Index";
import ProductsPage from "./products/Index";

const { routes } = config;

const Pages = [
    {
		path: routes.home,
		element: <HomePage />,
   },
   {
    path: routes.product,
    element: <ProductsPage />,
},
]

export default Pages; 