import React from "react";
import './flex-container.style.css'
function FlexContainer({children, gap=0}){
    return(
        <div>
            {children}</div>
    )
}
export default FlexContainer;