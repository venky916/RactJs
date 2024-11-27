import React, { useMemo, useState } from 'react';
import { findNthPrime } from '../utils/helper.js';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //console.log('Rendering.....');
  //heavy operations like calulating primiNumber
  const prime = findNthPrime(text);
  //   const prime = useMemo(() => findNthPrime(text),[text]);

  return (
    <div
      className={
        'm-4 p-2 w-96 h-96 border border-black ' +
        (isDarkTheme && 'bg-black text-white')
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <input
        className="border border-black px-2 w-72"
        type="number"
        vlaue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
