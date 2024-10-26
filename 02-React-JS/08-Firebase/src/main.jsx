import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import About from './pages/About/About.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ProtectedRoutes component={<Home />}/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'about/*',
        element: <About/>,
        children: [
          {
            path: '', 
            element: <h1>/ route</h1>
          },
          {
            path: 'nested1',
            element: <h1>Nested one</h1>
          },
          {
            path: 'nested2',
            element: <h1>Nested two</h1>
          },
          {
            path: 'nested3',
            element: <h1>Nested three</h1>
          },
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




// firebase authentication
// protected routes
// nested routes