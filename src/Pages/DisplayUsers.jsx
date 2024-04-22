import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../Store/Slices/UserSlice';
import { IoTrashBin } from "react-icons/io5";
export default function DisplayUsers() {
    const data = useSelector((state)=>{
        return state.user;
    })
    const dispatch = useDispatch()
    const deleteUser=(id)=>{
      dispatch(removeUser(id))
    }

    console.log(data)
  return (
    <div>
      {data.map((user,id)=>{
         return <div key={id} className='h-[5rem] w-full mx-5 flex justify-between items-center border-t-[0.1px] border-b-[0.1px] border-black'> 
         <p className='font-mono'>{user}</p>
         <button className=' text-white p-2 font-thin  rounded-full bg-sky-800' onClick={deleteUser}><IoTrashBin></IoTrashBin></button>
       </div>
      })}
    </div>
  )
}
