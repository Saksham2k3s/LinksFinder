import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import Search from './Component/Search';
import HomePage from './Component/HomePage';

import { useContext } from 'react';
import HooksContext from './Component/Context/HooksContext';
import Footer from './Component/Footer';
import CategoryCourse from './Component/CategoryCourse';
import SubLinks from './Component/SubLinks';
import NoFound from './Component/NoFound';


function App() {
  const context = useContext(HooksContext)
  const {mode} = context
  return (
 <>
  
 <div className={`container-fluid ${mode === false ? 'backgroundLight' : 'backgroundDark'}`} style={{minHeight:'100vh'}} >

<Navbar/>
<Search/>
 <Routes> 
  <Route  path='/' element={<HomePage/>} />
  <Route  path='/LinksFinder' element={<HomePage/>} />
   <Route path='/category/:category' element={<CategoryCourse/>} /> 
  <Route path='/:category/:name' element={<SubLinks/>} />
  <Route path='/nofound' element={<NoFound/>} />
 </Routes>
 <Footer/>
</div>

 </>
  );
}

export default App;
