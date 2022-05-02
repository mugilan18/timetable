import { render } from "react-dom";
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

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/registerstaff" element={<Registerstaff />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/loginstaff" element={<Loginstaff />}/>
      <Route path="/loginadmin" element={<Loginadmin />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/frontpage" element={<Frontpage />}/>
      <Route path="/frontpagestaff" element={<Frontpagestaff />}/>
      <Route path="/frontpageadmin" element={<Frontpageadmin />}/>
      <Route path="/stafftable" element={<Stafftable />}/>
      <Route path="/tableview" element={<Tableview />}/>
     
     
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
