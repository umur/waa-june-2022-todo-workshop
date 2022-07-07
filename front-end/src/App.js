import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import store from './components/Store'
import Counter from './components/Counter'
function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </Provider>
// {/* <Counter>

// </Counter> */}

  );
}

export default App;
