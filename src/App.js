import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AddEmployee } from './components/add-employee';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/home';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEmployee} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
