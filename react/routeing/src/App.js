import './App.css';
import {Router} from '@reach/router';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagefour from './Pagefour';
function App() {
  return (
    <div className="App">
      <Router>
        <Pageone path="/home"></Pageone>
        <Pagetwo path="/:id"></Pagetwo>
        <Pagefour path="/:id/:color/:bcolor"></Pagefour>
      </Router>
    </div>
  );
}

export default App;
