import React, {useState} from 'react';

function Counter() {
    // let clickMe = 0;
    const [clickMe, setClickMe] = useState(0);

    function increment() {
        // clickMe++;
        // console.log(clickMe);
        setClickMe(clickMe + 1);
    }
  return (
    <div>
        <button onClick={increment}>Click me</button>
        {clickMe}
    </div>
  );
}

export default Counter;