import './App.css';
import Heading from './Heading';
import Navigation from './Navigation';
import Request from './Request';
function App() {
  return (
    <div className='app-content'>
      <Navigation />
      <div className='right-view'>
        <Heading />
        <div className='body-wrapper'>
          <Request />
          <Request />
          <Request />
          <Request />
        </div>

      </div>
    </div>
  );
}

export default App;
