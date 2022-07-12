import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './App.css';
import { AlticciService } from './shared/services/alticci_service';

function App() {

  const alticciService: AlticciService = new AlticciService();

  const [number, setNumber] = useState<number>();

  const [requestNumber, setRequestNumber] = useState<number>();
  const [result, setResult] = useState<number>();

  const onCalculate = async () => {
    if (!number) {
      return;
    }

    setRequestNumber(number);

    const sequenceResult = await alticciService.calculate(number ?? 0);

    setResult(sequenceResult);
  }

  return (
    <div className="app">
      <div className='app-content'>
        <div className='form-box'>
          <TextField label="Número" variant="outlined" type='number' onChange={event => setNumber(parseInt(event.target.value))} />
          <div className='break-clear'></div>
          <Button color='success' variant="outlined" className='btn-generate' onClick={onCalculate}>Calcular</Button>
        </div>
        <div className='break gap-top'></div>
        {
          result
            ? <div className='result-box'>Alticci Sequence for <span className='request-number-text'>{requestNumber}</span> is <span className='result-number-text'>{result}</span></div>
            : null
        }

      </div>
    </div>
  );
}

export default App;
