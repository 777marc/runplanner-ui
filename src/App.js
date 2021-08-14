import { useRoutes } from 'hookrouter';
import Routes from './components/app/Routes';
import Menu from './components/app/Menu';
import NotFound from './components/app/NotFound';
import './App.css';

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <>
      <h2>Run Planner</h2>
      <Menu />
      { routeResult || <NotFound />}
    </>
  ) 
}

export default App;
