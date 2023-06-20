import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/slices/BonusSlice'

const Bonus = () => {
const points = useSelector(state=>state.bonus.points)
const dispatch = useDispatch()
 
  return (

    <div className='container2'>
        <div className='form2'>

       <h1>
         Bonus
        </h1>
        <p>total point : {points} </p>
        <button type='button' onClick={()=>dispatch(increment())}> + </button>
        </div>
        </div>
  )
}

export default Bonus