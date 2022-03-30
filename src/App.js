import logo from './logo.svg';
import './App.css';
import { useCash } from './hooks/cash';
import { NavMenu } from './components/menu/topmenu';
import { Dashboard } from './dashboard/dash';
import { useContent } from './hooks/contentid';
import { LoadContent } from './contentloader';

function App() {
  const {content, setContent} = useContent();
  const {Cash, setCash} =useCash()
  return (
    <div className="App">
      <div>
        <NavMenu />
        <LoadContent />
      </div>
    </div>
  );
}

export default App;
