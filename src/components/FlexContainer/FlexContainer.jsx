import React from "react";
import './flex-container.style.css'
function FlexContainer({children, flexDirection = "row", gap=0}){
    return(
        <div style= {{"gap":gap}} className={`flex-container ${flexDirection === "row"? "flex_row":"flex_column"}`}>
            {children}</div>
    )
}
export default FlexContainer;