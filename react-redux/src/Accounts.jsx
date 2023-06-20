import React from 'react'
import './App.css'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { decrement, getUserAmount, increment,incrementByAmount } from './redux/slices/AccountSlice'

const Accounts = () => {
   const amount = useSelector(state=>state.account.amount)
   const points = useSelector(state=>state.bonus.points)
  //  console.log(useSelector(state=>state.account.amount))
   const dispatch = useDispatch()
const [Value,setValue] = useState()

    const inputRef = useRef(null)
    useEffect(() => {
     inputRef.current.focus()
    }, [])
 
  return (
    <div className='container'>
    <div className='form'>
        
        <h1>
        
        Accounts
        </h1>
        <p>{amount}</p>
        <div>
            <form action="">

            <input ref={inputRef} type="text" onChange= {(e)=>setValue(+e.target.value)} value={Value}  />
            <div className='btn'>

            <button type='button' onClick={(e)=>dispatch(increment())}>+</button>
            <button  type="button"  disabled={Value? false:true} onClick={(e)=>{dispatch(incrementByAmount(Value));setValue(0)}}>  fire {' '}{Value}
            </button>
            <button  type="button" onClick={(e)=>dispatch(getUserAmount(1)) }>fetch</button>
            <button  type="button" onClick={(e)=>dispatch(decrement()) }>-</button>
            </div>
            </form>
        </div>


        </div>

        <div>
            <h1>RESULTS</h1>
            <p>Current Account : {amount}</p>
            <p>Total Bonus : {points}</p>
        </div>
    </div>
  )
}

export default Accounts