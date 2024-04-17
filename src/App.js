import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { routes } from './routes';
import Footer from './components/Footer/Footer';

function App() {
  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
