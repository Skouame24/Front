import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Multiform from './component/Multiform'
import Button from './component/Button';
import { ScrollDownIndicator } from 'react-landing-page'


function App() {
  return (
    <div className="App">
       
        <div className='header'>
            <Header />
            <Button />
            
            <ScrollDownIndicator/>
        </div>
        
     
       <Multiform />
    </div>
  );
}

export default App;
