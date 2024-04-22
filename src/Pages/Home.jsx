import React from 'react'
import Items from './Items'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser, deleteUsers } from '../Store/Slices/UserSlice'
import DisplayUsers from './DisplayUsers'
import { useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    return state.user;
})
const removeAll = () =>{
  dispatch(deleteUsers())
}

  const addNewUser = (payload) =>{
    console.log("Home:",payload)
    dispatch(addUser(payload))
  }

  return (
    <div className='w-[50vw] '>
        <div className='h-[5rem] w-full items-center flex justify-between mx-5 my-10'>
            <p className='text-4xl'>List of user details</p>
            <button onClick={()=>addNewUser(fakeUserData())} className='p-2 rounded-xl font-light bg-slate-800 text-white hover:bg-slate-700 h-[3rem]'> + Add new users </button>
        </div>
        
        <DisplayUsers/>
        <div className='w-full flex justify-center my-10'>
        {data.length>0 && <button onClick={()=>removeAll()}  className='p-2 px-9 rounded-full font-light bg-zinc-700 text-white hover:bg-slate-700 h-[3rem] '> Clear users</button>}
        </div>
    </div>
  )
}
