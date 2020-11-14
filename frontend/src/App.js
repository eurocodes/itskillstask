import { useMemo, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { UserContext } from './userContext';
import AuthScreen from './views/AuthScreen';
import { HomeScreen } from './views/HomeScreen';

function App() {

  const [userData, setUserData] = useState(null)
  const value = useMemo(() => ({ userData, setUserData }), [userData, setUserData])

  return (
    <BrowserRouter>
      <div className="App-container">
        <UserContext.Provider value={value}>
          <Route path="/" exact component={AuthScreen} />
          <Route path="/home" component={HomeScreen} />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
