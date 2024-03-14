
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import { Dashboard } from './components/Dashboard';
import Emails from './components/Emails';
import {Provider} from 'react-redux'
import { store } from './Store';
function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='email' element={<Emails/>}/>
       </Routes>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
