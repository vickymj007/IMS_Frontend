import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import ListUsers from './components/ListUsers/ListUsers';
import AddUser from './components/AddUser/AddUser';
import Main from './layouts/Main';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Main/>}>
    <Route index element={<ListUsers/>}/>
    <Route path='add-influencer' element={<AddUser/>}/>
  </Route>
))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
