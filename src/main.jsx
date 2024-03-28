import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { ToastContainer } from 'react-toastify';
import WishListBooks from './components/WishListBooks/WishListBooks.jsx';
import WishListBook from './components/WishListBook/WishListBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/lBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('BookCollection.json')
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch('BookCollection.json')
      },
    {
      path:'/book/:id',
      element:<BookDetails></BookDetails>,
      loader:()=>fetch('BookCollection.json')
    },
    {
      path:'/wishListBooks',
      element:<WishListBooks></WishListBooks>,
      loader:()=>fetch('BookCollection.json')

    }   
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />,
    <ToastContainer></ToastContainer>
  </>
    
  
)
