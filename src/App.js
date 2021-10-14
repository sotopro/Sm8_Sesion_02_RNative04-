import './App.css';
import { Route, Switch } from 'react-router-dom';
import { EmployeeList } from './components/employee-list';
import { AddEmployee } from './components/add-employee';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          <Route path="/add" component={AddEmployee} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
