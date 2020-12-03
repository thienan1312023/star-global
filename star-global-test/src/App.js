import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducers';
import DrawArea from './components/draw-area';


const store = createStore(
  reducer
)

function App() {
  return (
    <div className="App">
      <DrawArea />
    </div>
  );
}

export default App;
