// import './App.css'
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RequestTable from './components/RequestTable';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return <RequestTable />;
}

export default App;