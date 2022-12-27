import './App.css';
import Content from './components/content/Content'
import CreatePost from './components/createpost/CreatePost'
import Navbar from './components/navbar/Navbar'
import SortByBar from './components/sortbybar/SortByBar'

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
