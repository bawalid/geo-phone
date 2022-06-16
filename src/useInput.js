import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const updateValue = (e) => {
    !isNaN(e.target.value) &&
      e.target.value.length < 16 &&
      setValue(e.target.value);
  };

  return [value, updateValue];
}

export default useInput;
