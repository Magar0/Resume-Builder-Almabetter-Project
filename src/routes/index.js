import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import About from "../pages/About/About";
import ErrorBoundary from "../pages/Error/ErrorBoundary";
import PdfComponent from "../pages/PdfComponent/PdfComponent";
import NavbarComponent from "../components/Navbar";

//creating routing path
export const routes = [
    {
        path: '/',
        element: <NavbarComponent />,
        errorElement: <ErrorBoundary />, //error routing
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/preview',
                element: <PdfComponent />
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
]
