import React, { useState } from 'react';

export default function StateAssignment3() {
  const [selectedState, setSelectedState] = useState('');
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <>
      <select className="form-select w-50" onChange={handleChange} value={selectedState} >
        <option value="">-- Select State --</option>
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>

      {selectedState && (
        <div className="mt-3">
          You selected: <strong>{selectedState}</strong>
        </div>
      )}
    </>
  );
}
