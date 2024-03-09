
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import { Dashboard } from './components/Dashboard';
function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
