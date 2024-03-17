import React from 'react';
import completedone from '../assest/images/completedone.svg'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";

const Completed = ()=> {
    const navigate = useNavigate()
  return (
    <div className=' bg-[#4700FF] h-screen'>
        <h1 className='text-white leading-[69px] text-center text-[48px] tracking-wider uppercase font-bold py-9'>
        Activatr team will reachout soon
        </h1>
        <figure className='flex justify-center mb-20'>
        <img src={completedone} alt="Completed" />
        </figure>

        <div className='text-center'>
       <Button text='Done' className='text-[#4700FF]  px-14 rounded-md cursor-pointer text-[40px] uppercase font-medium leading-[58px] bg-white' onclick={()=>navigate('/')}/>
       </div>
    </div>
  )
}

export default Completed
