import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div className='counterapp'>
      <h1>Counter App</h1>
      <div className='container'>
        <div className='total_amount_card' style={{background: `linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)`}}>
        <div className="right">
            
        </div>
        <div className="card_text">
            <h1 className='total_amount_heading'>Count : {count}</h1>
        </div>
        </div>
        <form>
        <div className="button_collection">
        <Stack spacing={2} direction="row">
      <Button onClick={()=> setCount((prev)=> prev+1)} className='btn_one' variant="contained">+</Button>
      <Button onClick={()=> (
        count === 0 ? 0 : setCount((prev)=> prev-1)
  )} className='btn_two' variant="contained">-</Button>
      <Button onClick={()=> setCount((prev)=> 0)} className='btn_one' variant="contained">Clear</Button>

    </Stack>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Counter
