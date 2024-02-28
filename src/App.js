// import logo from './logo.svg';
import './index.css';
import { Timer } from './Components/Timer';
function App() {
  return (
    <div className="App ">
      <nav className='bg-yellow-200 flex justify-evenly h-10 text-2x'>
        <li className='inline-block h-full hover:bg-sky-700 items-center flex px-4 italic text-2xl'>Timer</li>
        <li className='inline-block h-full hover:bg-sky-700 items-center flex px-4 italic text-2xl'>Stop Watch</li>
      </nav>
      <Timer />
      
    </div>
  );
}

export default App;
