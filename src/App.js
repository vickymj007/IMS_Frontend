import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import ListUsers from './components/ListUsers/ListUsers';
import AddUser from './components/AddUser/AddUser';
import Main from './layouts/Main/Main';
import About from './layouts/About/About';
import Contact from './layouts/Contact/Contact';
import {Toaster} from 'react-hot-toast'
import EditUser from './components/EditUser/EditUser';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Main/>}>
    <Route index element={<ListUsers/>}/>
    <Route path='add-influencer' element={<AddUser/>}/>
    <Route path='edit-influencer/:id' element={<EditUser/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
  </Route>
))

function App() {

  return (
    <div className="App">
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
