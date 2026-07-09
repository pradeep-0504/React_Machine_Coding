import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const[past,setPast] = useState([]);
    const[present,setPresent]=useState(0);
    const[future,setFuture]=useState([]);

    const Increment=()=>{
update(present+1);
    }
    const Decrement=()=>{
update(present-1)
    }

    const update=(newVal)=>{
        setPast([...past,present]);
        setPresent(newVal);
        setFuture([]);
    }

    const undo=()=>{
        if(past.length===0) return;

        const previous=past[past.length-1];
        setPast(past.slice(0,-1));
        setFuture([present,...future]);
        setPresent(previous);
    }

    const redo=()=>{
        if(future.length===0) return;

        const next=future[0];
        setFuture(future.slice(1));
        setPast([...past,present]);
        setPresent(next);
    }
  return (
    <div>
      <h1>{present}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>

      <br />
      <br />


      <button onClick={undo} disabled={past.length==0}>Undo</button>
      <button onClick={redo} disabled={future.length==0}>Redo</button>



    </div>
  )
}

export default Counter
