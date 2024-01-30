import './App.scss';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className=" app flex stretch h-full ">
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;
