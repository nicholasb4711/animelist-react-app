import './App.css';
import Loading from './Login/index'
import { useDataLayerValue } from './DataLayer'
import Page from './Home/index'

function App() {
  const [{user}, dispatch] = useDataLayerValue();
  return ( 
    <div className="App">
      {
      user? <Page />
      :
      <Loading />
      }
    </div>
  );
}

export default App;
