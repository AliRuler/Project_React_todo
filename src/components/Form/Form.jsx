import React from "react";

function Form({children, onSubmit}){
    return(
    <form className="flex justify-center items-center w-full flex-col justify-center items-center mb-8 w-full" onSubmit={onSubmit}>
        {children}
    </form>
    )
}
export default Form;