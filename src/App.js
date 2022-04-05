import "./App.css";
import Sidebar from './components/Sidebar';
import Profile from './components/Profile'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
/* import Dashboard from './Pages/Dashboard';
import Heart from './Pages/Heart';
import Lungs from './Pages/Lungs'; */

function App() {
  return (
    <>
    <BrowserRouter>
  {/*   <Sidebar />  */}
       <Profile />
      <Routes>
{/*     <Route path="/" exact element={<Dashboard />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/lungs" element={<Lungs />} /> */} 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
