import { useState } from 'react';

const Form=(props)=>{

    const [value, setValue]= useState('')

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        props.onDataFetch(value);
        setValue('')
    }

    const collectValueHandler=(e)=>{
        if((e.target.value).trim()!==''){
        setValue((e.target.value));
        }
        
    }

    return(
        <div className="text-center">
            <h1 className="md:text-6xl sm:text-5xl m-12 font-['Comfortaa'] text-[#1d3557]">Make A To-Do-List!</h1>
        <form onSubmit={formSubmitHandler}>
            <input className="h-14 xl:w-1/3 sm:w-2/3 mb-8 px-4 rounded text-xl font-['Short Stack'] bg-[#f1faee] text-[#1d3557] lg:w-3/5" type="text" placeholder="What's On Your Mind?" value={value} onChange={collectValueHandler}/>
            <button className="bg-[#1d3557] h-14 text-2xl px-7 py-2 rounded mx-5 font-['Comfortaa'] text-[#f1faee] hover:text-[#f7fff5] hover:-translate-y-1 hover:-translate-x-1 hover:bg-[#435673] transition">Add</button>
        </form>
        </div>
        
    )
    

}

export default Form;