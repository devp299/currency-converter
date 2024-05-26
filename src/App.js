import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='card'>
        <h1 className='text-6x1'>Currency Converter</h1>
        <div className='currency_exchange'>
          <div className='input_container'>
            <label className='input_label'>Amount: </label>
            <input type='number' name='amount' className='input_field' value=''></input>
            
          </div>
        </div>
      </div>
    );
}

export default App;
