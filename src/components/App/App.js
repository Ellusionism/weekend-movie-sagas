import {useHistory, HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList'
// Component that displays all of the available movies
import Details from '../Details/Details'
// Component that displays the details of the selected movie

function App() {

  const history = useHistory();

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route  path={`/details/:id`} exact>
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
