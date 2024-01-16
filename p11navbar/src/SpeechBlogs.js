import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
const Speech = ()=> {
  const [value, setValue] = useState('saman aggarwal');
  const { speak } = useSpeechSynthesis();
 
  return (
    <div>
      <p
        value={value}
        // onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}
export default Speech;