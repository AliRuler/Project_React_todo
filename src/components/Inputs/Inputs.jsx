import React from "react";

function Inputs({title,name,type,value,onChange}){
    return(
    <div class="flex flex-col">
        <label for="text" class="mt-4 font-semibold">{title}:</label>
        <input name={name} type={type} value={value} onChange={onChange} id="text" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
    </div>
    )
}

export default Inputs;