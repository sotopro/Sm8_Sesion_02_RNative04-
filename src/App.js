import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AddEmployee } from './components/add-employee';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/home';
import { EditEmployee } from './components/edit-employee';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEmployee} />
          <Route path="/edit/:id" component={EditEmployee} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
