
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import { Dashboard } from './components/Dashboard';
import Emails from './components/Emails';
function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='email' element={<Emails/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
