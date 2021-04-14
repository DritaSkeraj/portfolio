import './App.css';
import { LiquidSwipe } from './components/liquidswipe';
import Pg1 from './pages/pg1';
import Pg2 from './pages/pg2';
import Pg3 from './pages/pg3';
import Pg4 from './pages/pg4';
import Pg5 from './pages/pg5';
import Pg6 from './pages/pg6';
import Pg7 from './pages/pg7';

let components = [<Pg1/>, <Pg2/>, <Pg3/>, <Pg5/>, <Pg7/>];

function App() {

  return (
    <div>
      <LiquidSwipe components={components} colors={["#9E00E3", "#EAE8FF", "#0024D6", "#00D682", "#fff"]}/>
    </div>
  );
}

export default App;
