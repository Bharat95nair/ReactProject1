import React, { useState } from 'react';

function StateAssignment2() {
  const maxChars = 100;
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        id="limited-text"
        className="form-control"
        rows="2"
        maxLength={maxChars}
        value={text}
        onChange={handleChange}
        style={{ width: '400px' }}
      />
      <div className="mt-2 text-muted">
        Remaining characters: <strong>{maxChars - text.length}</strong>
      </div>
    </>
  );
}

export default StateAssignment2;
