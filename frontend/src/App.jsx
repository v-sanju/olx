import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import User from './components/User'

import HomePage from './routes/homePage/HomePage'
import Layout from './routes/layout/layout'
import BuyAndSell from './routes/buyAndSell/BuyAndSell'
import Taxi from './routes/taxi/Taxi'
import Canteen from './routes/canteen/Canteen'

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Sell from './routes/buyAndSell/sell'

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/taxi",
          element:<Taxi/>
        },
        {
          path:"/buyandsell",
          element:<BuyAndSell/>,
          children: [
            {
              path: "sell", // Note: no leading slash here
              element: <Sell/>
            }
          ]
        },
        {
          path:"/canteen",
          element:<Canteen/>
        },
      ]
    }, 
   
  ]);
  return (
    <>
<<<<<<< HEAD:src/App.jsx
      {/* <Navbar/>
      <User/>
=======
      <Navbar/>
      <User login={true}/>
>>>>>>> 0ea4cea4f05906edd416d7816301ab8b1f584a93:frontend/src/App.jsx
      <Grid/>
      <Footer/> */}
      <RouterProvider router={router}/>

    </>
  )
}

export default App