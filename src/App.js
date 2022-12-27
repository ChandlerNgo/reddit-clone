import logo from './logo.svg';
import './App.css';
import './components/Content'
import './components/CreatePost'
import './components/Navbar'
import './components/SortByBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CreatePost/>
      <SortByBar/>
      <Content/>
    </div>
  );
}

export default App;
