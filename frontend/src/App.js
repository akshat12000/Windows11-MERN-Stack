import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loadUser } from './actions/User';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import TaskBar from './components/TaskBar/TaskBar';
import CreateFolder from './components/Folder/CreateFolder';
import FolderContent from './components/Folder/FolderContent';
import CreateFile from './components/File/CreateFile';

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state=>state.user);
 
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);
  return (
    <div className='main-div'>
      <Routes>
          <Route path='/' element={isAuthenticated?<Home/>:<Login/>}/>
          <Route path='/register' element={isAuthenticated?<Profile/>:<Register/>}/>
          <Route path="/profile" element={isAuthenticated?<Profile/>:<Login/>}/>
          <Route path="/folder/create" element={isAuthenticated?<CreateFolder/>:<Login/>}/>
          <Route path="/folder/:id" element={isAuthenticated?<FolderContent/>:<Login/>}/>
          <Route path="/file/create" element={isAuthenticated?<CreateFile/>:<Login/>}/>
      </Routes>
      {isAuthenticated&&<TaskBar/>}
    </div>
  );
}

export default App;
