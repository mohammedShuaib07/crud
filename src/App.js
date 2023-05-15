
import './App.css';
import User from './component/User';
import Adduser from './component/Adduser'
import {  Routes, Route } from "react-router-dom";
import Edituser from './component/Edituser';

function App() {
  return (
   <div >
<div id='heading'>Crud Application</div>
<Routes>
      
          <Route path='/' element={   <User/>} />
          <Route path='Add_user' element={<Adduser/>} />
          <Route path='edit_user/:id' element={<Edituser/>} />
         
        
      </Routes>

   </div>
  );
}

export default App;
