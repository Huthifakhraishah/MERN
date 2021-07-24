import './App.css';
import Example from './Example';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example firstname={"Jane"} lastname={"Doe"} age={"45"} haircolor={"Black"} />
        <Example firstname={"John"} lastname={"Smith"} age={"88"} haircolor={"Brown"} />
        <Example firstname={"Millard"} lastname={"Fillmore"} age={"50"} haircolor={"Brown"} />
        <Example firstname={"Maria"} lastname={"Smith"} age={"62"} haircolor={"Brown"} />
      </header>
    </div>
  );
}

export default App;
