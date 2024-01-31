import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboards from "./pages/Dashboard"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import Services from "./pages/Service"
import Contacts from "./pages/Contact"
import About from "./pages/About"
import Gallerys from "./pages/Gallery"
import Feedback from "./pages/Feedback"
import Payment from "./pages/Payment"
import Dashboard from "./pages/Admin/Dashboard"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfilePage from "./pages/Admin/Profile"
import DeleteTheme from "./pages/Admin/DeleteTheme"
import AddThemeForm from "./pages/Admin/AddThemeForm"
import EditTheme from "./pages/Admin/UpdateTheme"
import ViewThemes from "./pages/Admin/ViewTheme"
import Tables from "./pages/Admin/Tables"
import CustomerReview from "./pages/Admin/CustomerReview"
function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Suspense fallback={<Spinner/>}><Dashboards/></Suspense>
    },
    {
      path:'/Login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/signup',
      element:<Suspense fallback={<Spinner/>}><SignUp/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>}><About/></Suspense>
    }
    ,{
      path:'/contacts',
      element:<Suspense fallback={<Spinner/>}><Contacts/></Suspense>
    }
    ,{
      path:'/services',
      element:<Suspense fallback={<Spinner/>}><Services/></Suspense>
    }
     ,{
       path:'/feedback',
       element:<Suspense fallback={<Spinner/>}><Feedback/></Suspense>
     }
    ,{
      path:'/gallery',
      element:<Suspense fallback={<Spinner/>}><Gallerys/></Suspense>
    },
    {
      path:'/payment',
      element:<Suspense fallback={<Spinner/>}><Payment/></Suspense>
    }
    ,
    {
      path:'/addmin',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
    }
    ,
    {
      path:'/profilet',
      element:<Suspense fallback={<Spinner/>}><ProfilePage/></Suspense>
    }
    ,
    {
      path:'/addt',
      element:<Suspense fallback={<Spinner/>}><AddThemeForm/></Suspense>
    }
    ,
    {
      path:'/updatet',
      element:<Suspense fallback={<Spinner/>}><EditTheme/></Suspense>
    }
    ,
    {
      path:'/deletet',
      element:<Suspense fallback={<Spinner/>}><DeleteTheme/></Suspense>
    }
    ,
    {
      path:'/viewt',
      element:<Suspense fallback={<Spinner/>}><ViewThemes/></Suspense>
    }
    ,
    {
      path:'/tab',
      element:<Suspense fallback={<Spinner/>}><Tables/></Suspense>
    }
    ,
    {
      path:'/review',
      element:<Suspense fallback={<Spinner/>}><CustomerReview/></Suspense>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;