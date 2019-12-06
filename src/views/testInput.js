import React, { useState } from 'react';
import InputNumber from '../components/inputNumber';
import { render } from '@testing-library/react';

export default function App() {
  const [value, setValue] = useState('aaa');
  return (
    <div>
      value:
      <InputNumber
        value={value}
        onChange={e => {
          // setValue(e.target.value);
        }}
      />
      <br />
      default:
      <InputNumber
        defaultValue={value}
        onChange={e => {
          // setValue(e.target.value);
        }}
      />
    </div>
  );
}
