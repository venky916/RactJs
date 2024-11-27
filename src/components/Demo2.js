import React, { useEffect, useRef, useState } from 'react';

const Demo2 = () => {
  let x = 10;
  console.log(x);

  const [y, setY] = useState(0);
  const ref = useRef(0);
//   console.log(ref);

  console.log('Rendering....');
    const i = useRef(null);
    // console.log(i);
  useEffect(()=>{
    i.current = setInterval(()=>{
        console.log("Namaste React",Math.random());
    },1000)
    return ()=>{
        clearInterval(i.current);
    }
  },[])

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log('x=' + x);
          }}
          className="bg-green p-2 m-2"
        >
          Increase x
        </button>
        <span className="font-bold text-xl">let = {x}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setY(y + 1);
            // console.log(y);
          }}
          className="bg-green p-2 m-2"
        >
          Increase y
        </button>
        <span className="font-bold text-xl">state = {y}</span>
      </div>
      <div>
        <button
          onClick={() => {
            ref.current = ref.current+1;
            console.log("ref="+ref.current) 
          }}
          className="bg-green p-2 m-2"
        >
          Increase ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button className='bg-red p-2 m-4 text-white font-bold rounded-lg' onClick={()=>{
        // console.log(i);
        clearInterval(i.current);
      }}>Stop Printing</button>
    </div>
  );
};

export default Demo2;
