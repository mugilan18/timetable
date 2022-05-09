import { render } from "react-dom";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Registerstaff from "./Registerstaff";
import Home from "./Home";
import Frontpage from "./Frontpage";
import Loginstaff from "./Loginstaff";
import Frontpagestaff from "./Frontpagestaff";
import Loginadmin from "./Loginadmin";
import Frontpageadmin from "./Frontpageadmin";
import Stafftable from "./Stafftable";
import Tableview from "./Tableview";
import Tableviewstaff from "./Tableviewstaff";
import Home2 from "./Home2";
import Listtable from "./Listtable";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {


  return (
    <div className="App">
      <div className="context">
      
    <BrowserRouter>
   
    <Routes>
    
      <Route path="/frontpage" element={<Frontpage />}/>
      <Route path="/frontpageadmin" element={<Frontpageadmin />}/>
      <Route path="/frontpagestaff" element={<Frontpagestaff />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/staffandadmin" element={<Home2 />}/>
      <Route path="/alltable" element={<Listtable />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/loginadmin" element={<Loginadmin />}/>
      <Route path="/loginstaff" element={<Loginstaff />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/registerstaff" element={<Registerstaff />}/>
      <Route path="/stafftable" element={<Stafftable />}/>
      <Route path="/tableview" element={<Tableview />}/>
      <Route path="/tableviewstaff" element={<Tableviewstaff />}/>
     
      {/* staffandadmin */}
    </Routes>
  </BrowserRouter>
  </div>
  
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    </div>
  );
}

export default App;
