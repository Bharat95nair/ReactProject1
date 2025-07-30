import React,{useState} from 'react'

export default function StateAssignment8() {
   const [celsius, setCelsius] = useState('');

  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius);
    if (isNaN(c)) return '';
    return ((c * 9) / 5 + 32).toFixed(2); 
  };

  return (
    <>
      <h3>Temperature Converter</h3>

      <input
        type="number"
        className="form-control w-50 mb-2"
        placeholder="Enter Celsius"
        value={celsius}
        onChange={handleChange}
      />

      <div>
        Fahrenheit: <strong>{convertToFahrenheit()}</strong>
      </div>
    </>
  );
}
