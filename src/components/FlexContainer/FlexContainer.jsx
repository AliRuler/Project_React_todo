import React from "react";
import './flex-container.style.css'
function FlexContainer({children}){
    return(
        <div className="container mx-auto">
            {children}
        </div>
    )
}
export default FlexContainer;