import './App.css';
import PageHeader from './components/page-header/PageHeader';
import PumpsBuilder from './containers/pumps-builder/PumpsBuilder';
import { Route } from 'react-router-dom';
import PumpProperties from './components/pump-properties/PumpProperties';
import FilterSideBar from './components/FilterSideBar/FilterSideBar';
import PropertiesSideBar from './components/PropertiesSideBar/PropertiesSideBar';

function App() {
  return (
    <div className="app-container">
        <PageHeader></PageHeader>
      <div className="app-content">
        <div className="sidebar">
        <Route path="/" exact component={FilterSideBar}></Route>
        <Route path="/pumps" component={PropertiesSideBar}></Route>
        </div>
        <div className="main">
          <Route path="/" exact component={PumpsBuilder}></Route>
          <Route path="/pumps" component={PumpProperties}></Route>
        </div>
      </div>
    </div>
  );
}

export default App;
