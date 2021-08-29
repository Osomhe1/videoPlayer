// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './components/features/UserSlice';
import { Login } from './components/Login';
import { Logout } from './components/Logout';

function App() {

  const user = useSelector(selectUser)

  return <div className='App'>{user ? <Logout /> : <Login />}</div>
}

export default App;
